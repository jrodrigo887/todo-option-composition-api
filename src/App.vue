<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="app-header">
    <div>
      <nav>
        <RouterLink to="/">Options API</RouterLink>
        <RouterLink to="/composition-api">Comoposition API</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
<style>
  .app-header {
    background-color: black;
    opacity: 0.8;
    border-radius: 16px;
    width: 100%;
    padding: 20px 48px;
    text-align: center;
  }
  .app-header > div > nav > a {
	margin: 0 4px;
  }
</style>
