import { fileURLToPath, URL } from "node:url";
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
// import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import Unocss from "unocss/vite";
import { presetAttributify, presetIcons, presetUno } from "unocss";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const { VITE_APP_BASE_API, VITE_APP_BASE_ORIGIN } = loadEnv(mode, process.cwd());
  return {
    plugins: [
      vue(),
      AutoImport({
        imports: [
          "vue",
          "vue-router",
          "pinia",
          "@vueuse/core",
          {
            "@vueuse/core": [
              ["get", "getRef"],
              ["set", "setRef"],
            ],
          },
          {
            "@vueuse/integrations/useFuse": ["useFuse"],
          },
          {
            axios: [["default", "axios"]],
          },
          {
            "date-fns": ["addDays", "isBefore"],
          },
        ],
        dirs: ["src/api/**", "src/composable/**", "src/constant/**", "src/router/**", "src/stores/**", "src/utils/**"],
        dts: true,
        eslintrc: { enabled: true },
      }),
      Components({
        // resolvers: [NaiveUiResolver()],
        dirs: ["src/components/**"],
        dts: true,
      }),
      Unocss({
        presets: [
          presetUno(),
          presetAttributify(),
          presetIcons({
            collections: {
              "fluent-emoji-flat": () => import("@iconify-json/fluent-emoji-flat").then((i) => i.icons),
              ion: () => import("@iconify-json/ion").then((i) => i.icons),
              logos: () => import("@iconify-json/logos").then((i) => i.icons),
            },
          }),
        ],
      }),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    server: {
      port: 80,
      host: true,
      proxy: {
        [VITE_APP_BASE_API]: {
          target: VITE_APP_BASE_ORIGIN,
          changeOrigin: true,
          rewrite: (path) => path.replace(new RegExp("^" + VITE_APP_BASE_API), ""),
        },
      },
    },
  };
});
