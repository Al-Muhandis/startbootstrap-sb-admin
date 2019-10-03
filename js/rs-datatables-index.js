$(document).ready(function() {
  $('#domainsTable').dataTable( {
    "lengthMenu": [ [10, 50], [10, 50] ],
    "ordering": [[0, "desc"]]
  } );
  $('#requestsTable').dataTable( {
    "lengthMenu": [ [10, 50], [10, 50] ],
    "ordering": [[0, "desc"]]
  } );
  $('#registrarsTable').dataTable( {
    "lengthMenu": [ [25, 50], [25, 50] ],
    "ordering": [[0, "desc"]]
  } );
});