<script lang="ts">
	import Grid from 'gridjs-svelte';
	import 'gridjs/dist/theme/mermaid.css';
	import type { PageData } from './$types';

	export let data: PageData;
	data = data.rows;
	let columns = [
		{ id: 'isim', name: 'İSİM' },
		{ id: 'soyisim', name: 'Soy İsim' },
		{ id: 'ceptel', name: 'Cep Telefonu' },
		{ id: 'eposta', hidden: true }
	];

	let style = {
		table: {
			border: '3px solid #ccc'
		},
		th: {
			'background-color': 'rgba(0, 0, 0, 0.1)',
			color: '#000',
			'border-bottom': '3px solid #ccc',
			'text-align': 'center'
		},
		td: {
			'text-align': 'center'
		}
	};
</script>

<Grid
	{data}
	{columns}
	{style}
	pagination
	search={{
		ignoreHiddenColumns: false
	}}
	sort
	resizable
	fixedHeader
/>
