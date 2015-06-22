module.exports = [
    {
        eventName: 'someEvent',
        handler: function (data) {
            log.info("some event occure", data);
        }
    },
    {
        eventName: 'someMoreEvent',
        handler: function () {
            log.info("some more event occure");
        }
    }
];

