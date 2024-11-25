<template>
  <AsideNav />
  <div class="page-guide-content">
    <h2 class="page-guide-title" id="app">Mobile</h2>
    <div class="guide-table">
      <table>
        <thead>
          <tr>
            <th width="10%">1depth</th>
            <th width="10%">2depth</th>
            <th width="15%">3depth</th>
            <th width="15%">page ID</th>
            <th width="15%">html</th>
            <th width="10%">name</th>
            <th>memo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="depth1 center bold">Guide</td>
            <td class="depth2"></td>
            <td class="depth3"></td>
            <td class="depth4"></td>
            <td>
              <router-link to="/GuideIndex">guide.html</router-link>
            </td>
            <td>sally</td>
            <td>vue 개선작업완료</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
  import AsideNav from './Layout/AsideNav.vue';

  // export default {
  //   name: 'PageList',
  // }
</script>