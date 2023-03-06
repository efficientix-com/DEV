/**
 * @NApiVersion 2.1
 * @NScriptType Suitelet
 */
define(['N/log', 'N/ui/serverWidget'],
    /**
 * @param{log} log
 */
    (log, serverWidget) => {
        /**
         * Defines the Suitelet script trigger point.
         * @param {Object} scriptContext
         * @param {ServerRequest} scriptContext.request - Incoming request
         * @param {ServerResponse} scriptContext.response - Suitelet response
         * @since 2015.2
         */
        const onRequest = (scriptContext) => {
            try {

                var html = "";
                html += "<!DOCTYPE html>";
                html +="<html>";
                html +="<head>";
                html +="    <title>Holis</title>";
                html +="</head>";
                html +='    <iframe width="560" height="315"  src="https://app.hubspot.com/contacts/2955728/objects/0-5/views/all/list" frameborder="0" allowfullscreen></iframe>';
                html +="</html>";

                /* var html = "";
                html += "<!DOCTYPE html>";
                html +="<html>";
                html +="<head>";
                html +="    <title>Holis</title>";
                html +="</head>";
                html +="  <frameset cols='40%'>";
                html +='    <frame src="https://app.hubspot.com/contacts/2955728/objects/0-5/views/all/list">';
                html +="  </frameset>";
                html +="</html>"; */

                scriptContext.response.setHeader({
                    name: 'pruebita',
                    value: 'Prueba'
                });

                scriptContext.response.write(html);



                /* var form = serverWidget.createForm({
                    title: 'Holangasñangas'
                });

                form.addField({
                    id: "custpage_html_field",
                    type: serverWidget.FieldType.TEXT,
                    // label: ""
                }); */
            } catch (error) {
                log.error({title: 'Error on onRequest',details: error})

            }
        }

        return {onRequest}

    });
