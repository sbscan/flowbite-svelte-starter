<script lang="ts">
	import 'https://cdn.datatables.net/1.13.4/css/jquery.dataTables.min.css';
	import DataTable from 'datatables.net-dt';
	import type { PageData } from './$types';

	export let data: PageData;
	data = data.rows;
	let columns = [
		{ title: 'İSİM' },
		{ title: 'Soy İsim' },
		{ title: 'Cep Telefonu' },
		{ title: 'eposta' }
	];

	let can = DataTable({
		data: data,
		columns: columns
	});
</script>

<table id="example" class="display" width="100%" can />
