import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "products"
declare module "C:/Users/Alex Cosmas/Desktop/Sandbox/Nuxt/ECommerce Demo/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}