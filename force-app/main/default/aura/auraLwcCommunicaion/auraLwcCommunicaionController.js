({
    handleMessage : function(component, event, helper) {
        var msg = event.getParams('msg');
        //alert(JSON.stringify(msg));
        component.set("v.msg",JSON.stringify(msg));
    }
})
