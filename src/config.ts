import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/reacte-pokemon-zukan/', // ← ★リポジトリ名を「/」で囲んで追加！
})

const API_BASE_URL = "https://pokeapi.co/api/v2";

const INITIAL_POKEMON_LIST_LIMIT = 40;

export { API_BASE_URL, INITIAL_POKEMON_LIST_LIMIT };