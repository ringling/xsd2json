<template>
  <div>
    <v-row>
      <v-col cols="12" md="12">
        <v-textarea label="XSD input" v-model="xsd" hint="Hint text"></v-textarea>
      </v-col>
      <v-col cols="12" md="12">
        <div class="d-flex justify-space-around align-center flex-column flex-md-row fill-height">
          <v-btn @click="convertXsd2json()" :loading="pending" :disabled="pending">Convert</v-btn>
          <v-btn @click="copyToClipboard">Copy to clipboard</v-btn>
        </div>
      </v-col>
      <v-col cols="12" md="12">
          <span v-if="pending">Conversion can take 30-60 seconds</span>
      </v-col>
      <v-col cols="12" md="12">
        <v-textarea label="json output" rows="20" v-model="json"></v-textarea>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">

const xsd = ref("")
const pending = ref(false)
const json = useState<string>('json', () => "")

function copyToClipboard() {
  navigator.clipboard.writeText(json.value);
}

async function convertXsd2json() {
  this.pending = true

  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/xml',
    },
    body: this.xsd.trim()
  }

  const body = await $fetch('/api/convert', config)
  json.value = JSON.stringify(body.api, null, 2).trim()
  this.pending = false
}

</script>