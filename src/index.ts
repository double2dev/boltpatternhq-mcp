#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { SAMPLE_VEHICLES, B2B_UPGRADE_NOTICE, VehicleSpec } from "./sample-data.js";

const server = new Server(
  {
    name: "boltpatternhq-mcp",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "search_bolt_pattern",
        description:
          "Search automotive wheel fitment specifications (PCD / bolt pattern, center bore, offset ET, thread size, lug count) by vehicle make, model, year, or exact PCD (e.g. 'Jimny', 'Roadster', '5x114.3', 'Raize', 'BMW 3 Series').",
        inputSchema: {
          type: "object",
          properties: {
            query: {
              type: "string",
              description:
                "Search term: vehicle model name, manufacturer make, chassis code, or bolt pattern (e.g., 'Jimny', 'MX-5', '4x100', 'Tesla').",
            },
          },
          required: ["query"],
        },
      },
      {
        name: "get_make_models",
        description:
          "List all automotive manufacturers and supported model highlights available in the BoltPatternHQ sample library.",
        inputSchema: {
          type: "object",
          properties: {},
        },
      },
      {
        name: "get_sample_data",
        description:
          "Export the complete curated 50-row JSON sample dataset for CAD integration, wheel fitment calculators, and B2B testing.",
        inputSchema: {
          type: "object",
          properties: {},
        },
      },
    ],
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  if (name === "search_bolt_pattern") {
    const query = String(args?.query || "").toLowerCase().trim();
    if (!query) {
      return {
        content: [
          {
            type: "text",
            text: "Please provide a valid search query (e.g. 'Jimny', 'Roadster', '5x114.3')." + B2B_UPGRADE_NOTICE,
          },
        ],
      };
    }

    const results = SAMPLE_VEHICLES.filter((v) => {
      const fullText = `${v.make} ${v.model} ${v.year_range} ${v.pcd} ${v.notes || ""}`.toLowerCase();
      return fullText.includes(query);
    });

    if (results.length === 0) {
      return {
        content: [
          {
            type: "text",
            text: `No exact matches found for '${query}' in our public sample library.\n\n` +
                  `Note: Our complete B2B master database contains 11,601 verified model-year records across 66 global makes (1992-2026).\n` +
                  `You can instantly search or download the full dataset at https://boltpatternhq.com/` + B2B_UPGRADE_NOTICE,
          },
        ],
      };
    }

    const formattedResults = results
      .map(
        (r) =>
          `🚗 [${r.make}] ${r.model} (${r.year_range})\n` +
          `   • PCD (Bolt Pattern): ${r.pcd} (${r.lug_count}-lug)\n` +
          `   • Center Bore: ${r.center_bore}\n` +
          `   • Offset Range (ET): ${r.offset_range}\n` +
          `   • Thread Size / Lug Nuts: ${r.thread_size}\n` +
          `   • Notes: ${r.notes || "Standard OEM fitment"}`
      )
      .join("\n\n");

    return {
      content: [
        {
          type: "text",
          text: `Found ${results.length} matching vehicle fitment record(s) for '${query}':\n\n${formattedResults}\n` + B2B_UPGRADE_NOTICE,
        },
      ],
    };
  }

  if (name === "get_make_models") {
    const makesMap = new Map<string, string[]>();
    for (const v of SAMPLE_VEHICLES) {
      if (!makesMap.has(v.make)) {
        makesMap.set(v.make, []);
      }
      makesMap.get(v.make)!.push(`${v.model} (${v.year_range})`);
    }

    let output = "📋 BoltPatternHQ Sample Library - Manufacturers & Models:\n\n";
    for (const [make, models] of makesMap.entries()) {
      output += `🏢 ${make}:\n` + models.map((m) => `   - ${m}`).join("\n") + "\n\n";
    }

    return {
      content: [
        {
          type: "text",
          text: output.trim() + "\n" + B2B_UPGRADE_NOTICE,
        },
      ],
    };
  }

  if (name === "get_sample_data") {
    return {
      content: [
        {
          type: "text",
          text:
            `📦 Complete BoltPatternHQ JSON Sample Export (${SAMPLE_VEHICLES.length} vehicles):\n\n` +
            JSON.stringify(SAMPLE_VEHICLES, null, 2) +
            "\n" +
            B2B_UPGRADE_NOTICE,
        },
      ],
    };
  }

  throw new Error(`Unknown tool: ${name}`);
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("BoltPatternHQ MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error running BoltPatternHQ MCP server:", error);
  process.exit(1);
});
