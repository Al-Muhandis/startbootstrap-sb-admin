$(document).ready(function() {
  $('#contragentsTable').dataTable( {
    "lengthMenu": [ [25, 50, 100, 300], [25, 50, 100, 300] ],
    "order": [ [0, "desc"] ]
  } ); 
});