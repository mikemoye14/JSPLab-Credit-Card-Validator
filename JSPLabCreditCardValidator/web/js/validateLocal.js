$(document).ready(function() {
    $('#submit').hide();
    $('#exp').prop('selectedIndex', '-1');    
    $(window).keydown(function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            return false;
        }
    });
    $(document).mousemove(function() {
        if ($('#name').val() !== "" && $('#exp').prop('selectedIndex') !== -1 && !isNaN($('#cardNum').val())) {
            $('#submit').show('slow');
            $('#nan').hide();
        } else {
            $('#submit').hide();
        }
        if ($('#cardNum').val().length >= 13 && $('#cardNum').val().length <= 16) {
            $('#submit').show('slow');
            $('#invalidLength').hide();
        } else {
            $('#submit').hide();
        }
        if ($('#exp').prop('selectedIndex') !== -1) {
            $('#expError').hide();
        }
        if ($('#name').val() !== "") {
            $('#noName').hide();
        }        
    });
    $('#name').focusin(function() {
        $('#info').hide('slow');
        if ($('#name').val() !== "" && $('#exp').prop('selectedIndex') !== -1 && ($('#cardNum').val().length > 13 || $('#cardNum').val().length < 16) && !isNaN($('#cardNum').val())) {
            $('#submit').show('slow');
        } else {
            $('#submit').hide();
        }
    });
    $('#cardNum').focusin(function() {
        $('#info').hide('slow');
        if ($('#name').val() !== "" && $('#exp').prop('selectedIndex') !== -1 && ($('#cardNum').val().length > 13 || $('#cardNum').val().length < 16) && !isNaN($('#cardNum').val())) {
            $('#submit').show('slow');
        } else {
            $('#submit').hide();
        }
    });
    $('#name').focusout(function() {
        $('#info').hide('slow');
        if ($('#name').val() !== "" && $('#exp').prop('selectedIndex') !== -1 && ($('#cardNum').val().length > 13 || $('#cardNum').val().length < 16) && !isNaN($('#cardNum').val())) {
            $('#submit').show('slow');
        } else {
            $('#submit').hide();
        }
        if ($('#name').val() === "") {
            $('#noName').show();
        } else {
            $('#noName').hide();
        }
    });
    $('#cardNum').focusout(function() {
        $('#info').hide('slow');
        if ($('#name').val() !== "" && $('#exp').prop('selectedIndex') !== -1 && ($('#cardNum').val().length > 13 || $('#cardNum').val().length < 16) && !isNaN($('#cardNum').val())) {
            $('#submit').show('slow');
        } else {
            $('#submit').hide();
        }
        if ($('#cardNum').val().length < 13 || $('#cardNum').val().length > 16) {
            $('#invalidLength').show();
            $('#submit').hide();
        } else {
            $('#invalidLength').hide();
        }
        if (isNaN($('#cardNum').val())) {
            $('#nan').show();
            $('#submit').hide();
        } else {
            $('#nan').hide();
        }
    });
    $('#exp').focusin(function() {
        $('#info').hide('slow');
        if ($('#name').val() !== "" && $('#exp').prop('selectedIndex') !== -1 && ($('#cardNum').val().length > 13 || $('#cardNum').val().length < 16) && !isNaN($('#cardNum').val())) {
            $('#submit').show('slow');
        } else {
            $('#submit').hide();
        }
    });
    $('#exp').focusout(function() {
        $('#info').hide('slow');
        if ($('#name').val() !== "" && $('#exp').prop('selectedIndex') !== -1 && ($('#cardNum').val().length > 13 || $('#cardNum').val().length < 16) && !isNaN($('#cardNum').val())) {
            $('#submit').show('slow');
        } else {
            $('#submit').hide();
        }
        if ($('#exp').prop('selectedIndex') === -1) {
            $('#expError').show();
        } else {
            $('#expError').hide();
        }
    });
});