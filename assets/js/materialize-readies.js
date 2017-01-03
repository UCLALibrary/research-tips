 // Initialize collapse button
   $('.button-collapse').sideNav({
    //  menuWidth: 300, // Default is 240
    // edge: 'right', // Choose the horizontal origin
    //  closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    //  draggable: true // Choose whether you can drag to open on touch screens
    }
  );
       

 // Modals

  $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });