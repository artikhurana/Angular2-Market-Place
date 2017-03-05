 % ;
contentType = "text/html; charset=UTF-8" %  >
     % ;
prefix = "s";
uri = "/struts-tags" %  >
     % ;
prefix = "ocv";
uri = "/oceanview-tags" %  >
     % ;
uri = "http://tiles.apache.org/tags-tiles";
prefix = "tiles" %  >
    !DOCTYPE;
html >
    Trade;
Entry(Neat) < /title>
    < meta;
name = "page-name";
content = "Trade Entry" /  >
    src;
"neat/node_modules/core-js/client/shim.min.js" > /script>
    < script;
src = "neat/node_modules/zone.js/dist/zone.js" > /script>
    < script;
src = "neat/node_modules/reflect-metadata/Reflect.js" > /script>
    < script;
src = "neat/node_modules/systemjs/dist/system.src.js" > /script>
    < script;
src = "neat/node_modules/moment/moment.js" > /script>
    < script;
src = "neat/node_modules/numeric/numeric-1.2.6.min.js" > /script>
    < script;
src = "neat/node_modules/numeral/min/numeral.min.js" > /script>
    < script;
src = "neat/node_modules/jStat/dist/jstat.min.js" > /script>
    < script;
src = "neat/node_modules/formulajs/dist/formula.min.js" > /script>
    < script;
src = "neat/node_modules/excel-formula/dist/excel-formula.js" > /script>
    < script;
src = "neat/config-shim.js" > /script>
    < script;
src = "neat/config.js" > /script>
    < link;
rel = "stylesheet";
type = "text/css";
href = "neat/modules/view/sass-global/neat.css" >
    rel;
"stylesheet";
type = "text/css";
href = "neat/node_modules/jquery-ui/themes/sunny/jquery-ui.css" >
    rel;
"stylesheet";
type = "text/css";
href = "neat/node_modules/jquery-ui/themes/sunny/jquery-ui.min.css" >
    rel;
"stylesheet";
type = "text/css";
href = "neat/node_modules/jquery-ui/themes/sunny/jquery.ui.theme.css" >
    System.import("app-module").then(function (appModule) {
        System.import("trade-entry").then(function (pageModule) {
            appModule.boot(pageModule.TradeEntry, {
                // Struts tags will go here.
                positionType: '<ocv:jsprop value="%{#parameters.postype}"/>',
                securityPriceCurrency: ('<ocv:jsprop value="securityPriceCurrency"/>').trim(),
                CURRENCY_ID_USD: '<ocv:constant name="CURRENCY_ID_USD"/>',
                defaultSecurityPrice: '<ocv:jsprop value="securityCurrentPrice"/>',
                mode: '<ocv:jsprop value="%{#parameters.mode}"/>',
                externalLenderId: '<ocv:jsprop value="externalLenderId"/>',
                borrowAccountId: '<ocv:jsprop value="borrowAccountId"/>',
                loanBorrowTypeListJson: '<ocv:jsprop value="loanBorrowTypeListJson"/>',
                userSearchPreference: '<ocv:jsprop value="userSearchPreference"/>',
                currentDate: '<ocv:jsprop value="currentDate"/>',
                POSITION_TYPE_CASH_BORROW: '<ocv:constant name="POSITION_TYPE_CASH_BORROW"/>',
                POSITION_TYPE_CASH_POOL_BORROW: '<ocv:constant name="POSITION_TYPE_CASH_POOL_BORROW"/>',
                POSITION_TYPE_NCC_BORROW: '<ocv:constant name="POSITION_TYPE_NCC_BORROW"/>',
                INDEX_FIXED_RATE: '<ocv:constant name="INDEX_FIXED_RATE"/>',
                INDEX_NA: '<ocv:constant name="INDEX_NA"/>',
                extlendingaccount: '<s:text name="label.extlendingaccount"/>',
                account: '<s:text name="label.account"/>',
                positiontype: '<s:text name="label.positiontype"/>',
                currency: '<s:text name="label.currency"/>',
                collateraltype: '<s:text name="label.collateraltype"/>',
                custbank: '<s:text name="label.custbank"/>',
                basis: '<s:text name="label.basis"/>',
                calendar: '<s:text name="label.calendar"/>',
                newborrowSuccess: '<s:text name="msg.newborrow.success"/>',
                description: '<s:text name="label.description"/>',
                sedol: '<s:text name="label.sedol"/>',
                cusip: '<s:text name="label.cusip"/>',
                qty: '<s:text name="label.qty"/>',
                rate: '<s:text name="label.rate"/>',
                index: '<s:text name="label.index"/>',
                spread: '<s:text name="label.spread"/>',
                price: '<s:text name="label.price"/>',
                exposurelist: '<s:text name="label.exposurelist"/>',
                contractvalue: '<s:text name="label.contractvalue"/>',
                limitavailable: '<s:text name="label.limitavailable"/>',
                tradedate: '<s:text name="label.tradedate"/>',
                settledate: '<s:text name="label.settledate"/>',
                exchangerate: '<s:text name="label.exchangerate"/>',
                marketvalue: '<s:text name="label.marketvalue"/>',
                borrowdetails: '<s:text name="label.borrowdetails"/>',
                customizations: '<ocv:jsprop value="userSearchPreference"/>',
                hot: '<s:text name="label.hot"/>',
                basisActual360: '<ocv:constant name="BASIS_ACTUAL_360"/>',
                calendarUSA: '<ocv:constant name="CALENDAR_USA"/>',
                searchName: 'Borrow Entry'
            });
        }, function (err) {
            console.error(err);
        });
    });
/script>.apply(void 0, [app - loader, {
        position: absolute,
        top: 0,
        left: 0,
        height: 100 % ,
        width: 100 % ,
        background: black,
        color: white,
        text: -align, center: ,
        padding: -top, 20:  % 
    }
        < /style>
        < /head>
        < body >
        -entry >
        (function () {
            function class_1() {
            }
            return class_1;
        }()), "app-loader" >
        Loading, Page].concat(/div>
    < /trade-entry>
    < /body>
    < /html>));
//# sourceMappingURL=hhh.js.map