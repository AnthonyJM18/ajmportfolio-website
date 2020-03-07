$(function () {

    const buildModal = () => {
        div = $(`
               <div class="modal-dialog modal-md">
            <div class="modal-content">
                <div class="modal-header d-block">
                    <button type="button" class="close float-right" data-dismiss="modal" aria-label="Close" modal>
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h1 class="modal-title text-center" id="modaltitle">Contact Information</h1>
                </div>
                <div class="modal-body">
                    <div class="card-body">
                        <div class="row mb-2">
                            <div class="col-2">Email: </div>
                            <div class="col-4">
                                <a href="mailto:anthonymerante@interconnected.live">anthonymerante@live.ca</a>
                            </div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-2">Phone: </div>
                            <div class="col-4">
                                <a href="tel:9053416978">(905) 341-6978</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer text-center">
                    <input type="button" value="Close" data-dismiss="modal" class="btn-secondary btn-lg float-left" />
                </div>
            </div>
        </div>  
        `);
        $("#contactModal").append(div);
    };

    $("#contact").click(() => {
        $("#contactModal").modal("toggle");
    });

    buildModal();
});