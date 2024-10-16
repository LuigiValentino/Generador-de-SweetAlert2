$(document).ready(function() {
    var mixin;

    $('#generateAlert').on('click', function() {
        var alertType = $('#alertType').val();
        var title = $('#title').val();
        var text = $('#text').val();
        var icon = $('#icon').val();
        var confirmButtonText = $('#confirmButtonText').val() || 'Aceptar';
        var confirmButtonColor = $('#confirmButtonColor').val();
        var cancelButton = $('#cancelButton').val() === "true";
        var background = $('#background').val();
        var inputType = $('#inputType').val();
        var imageUrl = $('#imageUrl').val();
        var footer = $('#footer').val();
        var position = $('#position').val();
        var timer = $('#timer').val();
        var animation = $('#animation').val() === "true";
        var useMixin = $('#useMixin').val() === "true";
        var theme = $('#theme').val();

        var code = ``;

        if (useMixin) {
            code += `var mixin = Swal.mixin({
icon: '${icon}',
confirmButtonText: '${confirmButtonText}',
confirmButtonColor: '${confirmButtonColor}',
background: '${background}'
});
mixin.fire({
title: '${title}',
text: '${text}',`;
        } else {
            code += `Swal.fire({
title: '${title}',
text: '${text}',
icon: '${icon}',
confirmButtonText: '${confirmButtonText}',
confirmButtonColor: '${confirmButtonColor}',
background: '${background}',`;
        }

        if (inputType) {
            code += `\n    input: '${inputType}',`;
        }

        if (imageUrl) {
            code += `\n    imageUrl: '${imageUrl}',`;
        }

        if (footer) {
            code += `\n    footer: '${footer}',`;
        }

        if (cancelButton) {
            code += `\n    showCancelButton: true,`;
        }

        if (timer) {
            code += `\n    timer: ${timer},`;
        }

        code += `\n    position: '${position}',`;
        code += `\n    animation: ${animation}`;

        if (alertType === "toast") {
            code += `,
toast: true,
position: 'top-end'`;
        }

        code += `\n});`;

        $('#generatedCode').text(code);
    });

    $('#showAlert').on('click', function() {
        var alertType = $('#alertType').val();
        var title = $('#title').val();
        var text = $('#text').val();
        var icon = $('#icon').val();
        var confirmButtonText = $('#confirmButtonText').val() || 'Aceptar';
        var confirmButtonColor = $('#confirmButtonColor').val();
        var cancelButton = $('#cancelButton').val() === "true";
        var background = $('#background').val();
        var inputType = $('#inputType').val();
        var imageUrl = $('#imageUrl').val();
        var footer = $('#footer').val();
        var position = $('#position').val();
        var timer = $('#timer').val();
        var animation = $('#animation').val() === "true";
        var useMixin = $('#useMixin').val() === "true";
        var theme = $('#theme').val();

        if (theme === "dark") {
            Swal.fire({
                background: '#333',
                color: '#fff'
            });
        } else if (theme === "minimal") {
            Swal.fire({
                background: '#f2f2f2',
                color: '#000'
            });
        }

        var options = {
            title: title,
            text: text,
            icon: icon,
            confirmButtonText: confirmButtonText,
            confirmButtonColor: confirmButtonColor,
            background: background,
            showCancelButton: cancelButton,
            input: inputType || null,
            imageUrl: imageUrl || null,
            footer: footer || null,
            position: position,
            timer: timer || null,
            animation: animation
        };

        if (alertType === "toast") {
            options.toast = true;
            options.position = 'top-end';
        }

        if (useMixin) {
            mixin = Swal.mixin({
                icon: icon,
                confirmButtonText: confirmButtonText,
                confirmButtonColor: confirmButtonColor,
                background: background
            });
            mixin.fire(options);
        } else {
            Swal.fire(options);
        }
    });
});