import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "C:/Users/Alex Cosmas/Desktop/Sandbox/Nuxt/ECommerce Demo/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}