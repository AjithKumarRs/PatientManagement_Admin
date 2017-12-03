/// <reference types="jqueryui" />
/// <reference types="bootstrap"/>

namespace PatientManagement.PatientManagement {

    export class HelloModal extends Serenity.TemplatedWidget<any> {
        private formCabinet = new Common.HelloModalAddCabinetPanel(this.byId("ModalBodyCabinet"));
        private formPatient = new Common.HelloModalAddPatientPanel(this.byId("ModalBodyPatient"));
        private formVisitType = new Common.HelloModalAddVisitTypePanel(this.byId("ModalBodyVisitType"));
        private formVisit = new Common.HelloModalAddVisitPanel(this.byId("ModalBodyVisit"));

        constructor(elem: JQuery, opt: {}) {
            super(elem, opt);
            
            this.formPatient.init();
            this.formCabinet.init();
            this.formVisitType.init();
            this.formVisit.init();


            this.byId('ModalBodyInformation').attr("data-step", 1);

            $('#helloModal .modal').modal('show');
            let steps = 1;

            CabinetsService.List({ Take: 1 },
                response => {
                    if (response.TotalCount > 0) {
                        elem.find("#cabinets-box-modal").addClass("bg-green-gradient");
                    } else {
                        elem.find("#cabinets-box-modal").addClass("bg-blue-gradient");
                        steps += 1;
                        this.byId('btn-continue-modal').attr("data-steps", steps);
                        $("#cabinet-step").attr("data-step", steps);

                    }

                    VisitTypesService.List({ Take: 1 },
                        response => {
                            if (response.TotalCount > 0) {
                                elem.find("#visitTypes-box-modal").addClass("bg-green-gradient");
                            } else {
                                elem.find("#visitTypes-box-modal").addClass("bg-blue-gradient");
                                steps += 1;

                                this.byId('btn-continue-modal').attr("data-steps", steps);
                                $("#visit-type-step").attr("data-step", steps);

                            }


                            PatientsService.List({ Take: 1 },
                                response => {
                                    if (response.TotalCount > 0) {
                                        elem.find("#patients-box-modal").addClass("bg-green-gradient");
                                    } else {
                                        elem.find("#patients-box-modal").addClass("bg-blue-gradient");
                                        steps += 1;

                                        this.byId('btn-continue-modal').attr("data-steps", steps);
                                        $("#patient-step").attr("data-step", steps);

                                    }

                                    VisitsService.List({ Take: 1 },
                                        response => {


                                            if (response.TotalCount > 0) {
                                                elem.find("#visits-box-modal").addClass("bg-green-gradient");
                                            } else {
                                                elem.find("#visits-box-modal").addClass("bg-blue-gradient");
                                                steps += 1;
                                                this.byId('btn-continue-modal').attr("data-steps", steps);
                                                $("#visit-step").attr("data-step", steps);
                                                
                                            }
                                            $('#last-step').attr("data-step", steps + 1);

                                        });
                                });
                        });
                });




            this.byId('btn-continue-modal').attr("data-current-step", 1);

            $('#btn-close-hellomodal').mousedown(e => {
                var dataCurrentStep = Q.parseInteger($('#btn-close-hellomodal').attr("data-reaload-page"));
                if (dataCurrentStep === 1) {
                    window.location.reload();
                }
            });

            $('.btn-continiue-hellomodal').click(e => {
                e.preventDefault();
                e.stopPropagation();
                var dataCurrentStep = Q.parseInteger($('.btn-continiue-hellomodal').attr("data-current-step"));
                var dataSteps = Q.parseInteger($('.btn-continiue-hellomodal').attr("data-steps"));
                var dataNextStep = dataCurrentStep + 1;

                var thisElem = $('#helloModal').find(`[data-step='${dataCurrentStep}']`);
                var nextElem = $('#helloModal').find(`[data-step='${dataNextStep}']`);

                var thisElemId = thisElem.attr("id");
                if (!this.validateFormById(thisElemId))
                    return;
                
                if (dataCurrentStep < dataSteps) {

                    $('.btn-continiue-hellomodal').attr("data-current-step", dataNextStep);
                    if (dataCurrentStep === 1) {
                        $('.btn-continiue-hellomodal').text(Q.text("Site.HelloModal.ButtonContinue"));

                    }

                    if (dataCurrentStep === dataSteps - 1) {
                        $('.btn-continiue-hellomodal').text(Q.text("Site.HelloModal.ButtonFinnish"));
                        $('.btn-continiue-hellomodal').removeClass("btn-default");
                        $('.btn-continiue-hellomodal').addClass("btn-success");


                        $('#hellomodal-fast-continue').hide(200);
                    }
                } else {
                    $('.btn-continiue-hellomodal').hide();

                    $('#btn-close-hellomodal').removeClass("btn-default");
                    $('#btn-close-hellomodal').addClass("btn-success").text(Q.text("Site.HelloModal.ButtonCloseAndFinnish"));

                    $('#btn-close-hellomodal').attr("data-reaload-page", 1);
                }
                $(thisElem).hide();
               // $(thisElem).toggle("slide", () => {
                  //  $(nextElem).toggle("slide");
                    $(nextElem).show();
                //});

            });
             

        }

        
        protected validateFormById(thisElemId) {

            if (thisElemId === "cabinet-step") {
                if (!this.formCabinet.ValidateForm()) {
                    return false;
                }
                this.formCabinet.SaveEntity();

            }

            if (thisElemId === "patient-step") {
                if (!this.formPatient.ValidateForm()) {
                    return false;
                }
                this.formPatient.SaveEntity();

            }

            if (thisElemId === "visit-type-step") {
                if (!this.formVisitType.ValidateForm()) {
                    return false;
                }
                this.formVisitType.SaveEntity();

            }

            if (thisElemId === "visit-step") {
                if (!this.formVisit.ValidateForm()) {
                    return false;
                }
                this.formVisit.SaveEntity();

            }
            return true;
        }
        
    }
}