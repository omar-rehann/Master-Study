let all_link = document.querySelectorAll(".all .all_links button");
all_link.forEach((e) => {
    let section = document.querySelector(".courses .content")

    e.addEventListener("click", function() {
        if (e.className == "one")
            section.innerHTML = `
         <div class="row m-2">
                <div class="col-md-6 col-lg-4">
                    <div class="card mt-2" style="width: 100%;">
                        <img src="photo/work-1.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Graphic Design
                            </h5>
                            <hr>
                            <div class="flex  d-flex justify-content-between ">
                                <div class="frist">
                                    <i class="fa-solid fa-user"> 2904</i>
                                </div>
                                <div class="second">
                                    <i class="fa-solid fa-eye">24831</i>

                                </div>
                            </div>
                            <hr>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card mt-2" style="width: 100%;">
                        <img src="photo/work-2.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Graphic Design
                            </h5>
                            <hr>
                            <div class="flex  d-flex justify-content-between ">
                                <div class="frist">
                                    <i class="fa-solid fa-user"> 2904</i>
                                </div>
                                <div class="second">
                                    <i class="fa-solid fa-eye">24831</i>

                                </div>
                            </div>
                            <hr>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card mt-2" style="width: 100%;">
                        <img src="photo/work-6.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Graphic Design
                            </h5>
                            <hr>
                            <div class="flex  d-flex justify-content-between ">
                                <div class="frist">
                                    <i class="fa-solid fa-user"> 2904</i>
                                </div>
                                <div class="second">
                                    <i class="fa-solid fa-eye">24831</i>

                                </div>
                            </div>
                            <hr>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card mt-2" style="width: 100%;">
                        <img src="photo/work-6.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Graphic Design
                            </h5>
                            <hr>
                            <div class="flex  d-flex justify-content-between ">
                                <div class="frist">
                                    <i class="fa-solid fa-user"> 2904</i>
                                </div>
                                <div class="second">
                                    <i class="fa-solid fa-eye">24831</i>

                                </div>
                            </div>
                            <hr>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card mt-2" style="width: 100%;">
                        <img src="photo/work-7.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Graphic Design
                            </h5>
                            <hr>
                            <div class="flex  d-flex justify-content-between ">
                                <div class="frist">
                                    <i class="fa-solid fa-user"> 2904</i>
                                </div>
                                <div class="second">
                                    <i class="fa-solid fa-eye">24831</i>

                                </div>
                            </div>
                            <hr>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card mt-2" style="width: 100%;">
                        <img src="photo/base.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Graphic Design
                            </h5>
                            <hr>
                            <div class="flex  d-flex justify-content-between ">
                                <div class="frist">
                                    <i class="fa-solid fa-user"> 2904</i>
                                </div>
                                <div class="second">
                                    <i class="fa-solid fa-eye">24831</i>

                                </div>
                            </div>
                            <hr>
                            <p class="card-text">Some quick example text to build on the card title</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card mt-2" style="width: 100%;">
                        <img src="photo/a1.jpeg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Data Analysis
                            </h5>
                            <hr>
                            <div class="flex  d-flex justify-content-between ">
                                <div class="frist">
                                    <i class="fa-solid fa-user"> 5904</i>
                                </div>
                                <div class="second">
                                    <i class="fa-solid fa-eye">64831</i>

                                </div>
                            </div>
                            <hr>
                            <p class="card-text">Some quick example text to build on the card title</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card mt-2" style="width: 100%;">
                        <img src="photo/a4.jpeg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Data Analysis
                            </h5>
                            <hr>
                            <div class="flex  d-flex justify-content-between ">
                                <div class="frist">
                                    <i class="fa-solid fa-user"> 5904</i>
                                </div>
                                <div class="second">
                                    <i class="fa-solid fa-eye">64831</i>

                                </div>
                            </div>
                            <hr>
                            <p class="card-text">Some quick example text to build on the card title</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card mt-2" style="width: 100%;">
                        <img src="photo/a3.jpeg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Data Analysis
                            </h5>
                            <hr>
                            <div class="flex  d-flex justify-content-between ">
                                <div class="frist">
                                    <i class="fa-solid fa-user"> 5904</i>
                                </div>
                                <div class="second">
                                    <i class="fa-solid fa-eye">64831</i>

                                </div>
                            </div>
                            <hr>
                            <p class="card-text">Some quick example text to build on the card title</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card mt-2" style="width: 100%;">
                        <img src="photo/a8.jpeg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Data Analysis
                            </h5>
                            <hr>
                            <div class="flex  d-flex justify-content-between ">
                                <div class="frist">
                                    <i class="fa-solid fa-user"> 5904</i>
                                </div>
                                <div class="second">
                                    <i class="fa-solid fa-eye">64831</i>

                                </div>
                            </div>
                            <hr>
                            <p class="card-text">Some quick example text to build on the card title</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>
            </div>
        
        
        
        `
        else if (e.className == "two") {
            section.innerHTML = `
             <div class="row m-2">

                <div class="col-md-6 col-lg-6">
                    <div class="card mt-2" style="width: 100%;">
                        <img src="photo/t1.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Artism
                            </h5>
                            <hr>
                            <div class="flex  d-flex justify-content-between ">
                                <div class="frist">
                                    <i class="fa-solid fa-user"> 5904</i>
                                </div>
                                <div class="second">
                                    <i class="fa-solid fa-eye">64831</i>

                                </div>
                            </div>
                            <hr>
                            <p class="card-text">Ballet Dancing with Classic Music</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>
                <div class="col-md-6 col-lg-6">
                    <div class="card mt-2" style="width: 100%;">
                        <img src="photo/t2.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Artism
                            </h5>
                            <hr>
                            <div class="flex  d-flex justify-content-between ">
                                <div class="frist">
                                    <i class="fa-solid fa-user"> 5904</i>
                                </div>
                                <div class="second">
                                    <i class="fa-solid fa-eye">64831</i>

                                </div>
                            </div>
                            <hr>
                            <p class="card-text">Ballet Dancing with Classic Music</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

            </div>
            
            `
        } else if (e.className == "three") {
            section.innerHTML = `
            <div class="row m-2">

                <div class="col-md-6 col-lg-4">
                    <div class="card mt-2" style="width: 100%;">
                        <img src="photo/work-1 (1).jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Graphic
                            </h5>
                            <hr>
                            <div class="flex  d-flex justify-content-between ">
                                <div class="frist">
                                    <i class="fa-solid fa-user"> 5904</i>
                                </div>
                                <div class="second">
                                    <i class="fa-solid fa-eye">64831</i>

                                </div>
                            </div>
                            <hr>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card mt-2" style="width: 100%;">
                        <img src="photo/work-2 (1).jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Graphic
                            </h5>
                            <hr>
                            <div class="flex  d-flex justify-content-between ">
                                <div class="frist">
                                    <i class="fa-solid fa-user"> 5904</i>
                                </div>
                                <div class="second">
                                    <i class="fa-solid fa-eye">64831</i>

                                </div>
                            </div>
                            <hr>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card mt-2" style="width: 100%;">
                        <img src="photo/work-2 (3).jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Graphic
                            </h5>
                            <hr>
                            <div class="flex  d-flex justify-content-between ">
                                <div class="frist">
                                    <i class="fa-solid fa-user"> 5904</i>
                                </div>
                                <div class="second">
                                    <i class="fa-solid fa-eye">64831</i>

                                </div>
                            </div>
                            <hr>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card mt-2" style="width: 100%;">
                        <img src="photo/work-6.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Graphic
                            </h5>
                            <hr>
                            <div class="flex  d-flex justify-content-between ">
                                <div class="frist">
                                    <i class="fa-solid fa-user"> 5904</i>
                                </div>
                                <div class="second">
                                    <i class="fa-solid fa-eye">64831</i>

                                </div>
                            </div>
                            <hr>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card mt-2" style="width: 100%;">
                        <img src="photo/work-7.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Graphic
                            </h5>
                            <hr>
                            <div class="flex  d-flex justify-content-between ">
                                <div class="frist">
                                    <i class="fa-solid fa-user"> 5904</i>
                                </div>
                                <div class="second">
                                    <i class="fa-solid fa-eye">64831</i>

                                </div>
                            </div>
                            <hr>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>

            </div>


            `
        } else if (e.className == "four") {
            section.innerHTML = `
               <div class="row m-2">

                <div class="col-md-6 col-lg-4">
                    <div class="card mt-2" style="width: 100%;">
                        <img src="photo/g1.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Web Development
                            </h5>
                            <hr>
                            <div class="flex  d-flex justify-content-between ">
                                <div class="frist">
                                    <i class="fa-solid fa-user"> 5904</i>
                                </div>
                                <div class="second">
                                    <i class="fa-solid fa-eye">64831</i>

                                </div>
                            </div>
                            <hr>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card mt-2" style="width: 100%;">
                        <img src="photo/g2.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Web Development
                            </h5>
                            <hr>
                            <div class="flex  d-flex justify-content-between ">
                                <div class="frist">
                                    <i class="fa-solid fa-user"> 5904</i>
                                </div>
                                <div class="second">
                                    <i class="fa-solid fa-eye">64831</i>

                                </div>
                            </div>
                            <hr>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card mt-2" style="width: 100%;">
                        <img src="photo/g3.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Web Development
                            </h5>
                            <hr>
                            <div class="flex  d-flex justify-content-between ">
                                <div class="frist">
                                    <i class="fa-solid fa-user"> 5904</i>
                                </div>
                                <div class="second">
                                    <i class="fa-solid fa-eye">64831</i>

                                </div>
                            </div>
                            <hr>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card mt-2" style="width: 100%;">
                        <img src="photo/g4.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Web Development
                            </h5>
                            <hr>
                            <div class="flex  d-flex justify-content-between ">
                                <div class="frist">
                                    <i class="fa-solid fa-user"> 5904</i>
                                </div>
                                <div class="second">
                                    <i class="fa-solid fa-eye">64831</i>

                                </div>
                            </div>
                            <hr>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card mt-2" style="width: 100%;">
                        <img src="photo/g5.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Web Development
                            </h5>
                            <hr>
                            <div class="flex  d-flex justify-content-between ">
                                <div class="frist">
                                    <i class="fa-solid fa-user"> 5904</i>
                                </div>
                                <div class="second">
                                    <i class="fa-solid fa-eye">64831</i>

                                </div>
                            </div>
                            <hr>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>



            </div>

            `

        } else if (e.className == "six") {
            section.innerHTML = `
              <div class="row m-2">

                <div class="col-md-6 col-lg-4">
                    <div class="card mt-2" style="width: 100%;">
                        <img src="photo/shuffle-01.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">PhotoGrapgy
                            </h5>
                            <hr>
                            <div class="flex  d-flex justify-content-between ">
                                <div class="frist">
                                    <i class="fa-solid fa-user"> 5904</i>
                                </div>
                                <div class="second">
                                    <i class="fa-solid fa-eye">64831</i>

                                </div>
                            </div>
                            <hr>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card mt-2" style="width: 100%;">
                        <img src="photo/shuffle-02.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">PhotoGrapgy
                            </h5>
                            <hr>
                            <div class="flex  d-flex justify-content-between ">
                                <div class="frist">
                                    <i class="fa-solid fa-user"> 5904</i>
                                </div>
                                <div class="second">
                                    <i class="fa-solid fa-eye">64831</i>

                                </div>
                            </div>
                            <hr>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card mt-2" style="width: 100%;">
                        <img src="photo/shuffle-03.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">PhotoGrapgy
                            </h5>
                            <hr>
                            <div class="flex  d-flex justify-content-between ">
                                <div class="frist">
                                    <i class="fa-solid fa-user"> 5904</i>
                                </div>
                                <div class="second">
                                    <i class="fa-solid fa-eye">64831</i>

                                </div>
                            </div>
                            <hr>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card mt-2" style="width: 100%;">
                        <img src="photo/shuffle-04.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">PhotoGrapgy
                            </h5>
                            <hr>
                            <div class="flex  d-flex justify-content-between ">
                                <div class="frist">
                                    <i class="fa-solid fa-user"> 5904</i>
                                </div>
                                <div class="second">
                                    <i class="fa-solid fa-eye">64831</i>

                                </div>
                            </div>
                            <hr>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card mt-2" style="width: 100%;">
                        <img src="photo/shuffle-05.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">PhotoGrapgy
                            </h5>
                            <hr>
                            <div class="flex  d-flex justify-content-between ">
                                <div class="frist">
                                    <i class="fa-solid fa-user"> 5904</i>
                                </div>
                                <div class="second">
                                    <i class="fa-solid fa-eye">64831</i>

                                </div>
                            </div>
                            <hr>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card mt-2" style="width: 100%;">
                        <img src="photo/shuffle-06.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">PhotoGrapgy
                            </h5>
                            <hr>
                            <div class="flex  d-flex justify-content-between ">
                                <div class="frist">
                                    <i class="fa-solid fa-user"> 5904</i>
                                </div>
                                <div class="second">
                                    <i class="fa-solid fa-eye">64831</i>

                                </div>
                            </div>
                            <hr>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card mt-2" style="width: 100%;">
                        <img src="photo/quote.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">PhotoGrapgy
                            </h5>
                            <hr>
                            <div class="flex  d-flex justify-content-between ">
                                <div class="frist">
                                    <i class="fa-solid fa-user"> 5904</i>
                                </div>
                                <div class="second">
                                    <i class="fa-solid fa-eye">64831</i>

                                </div>
                            </div>
                            <hr>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>


            </div>
            `
        } else if (e.className == "five") {
            section.innerHTML = `
       <div class="row m-2">

                <div class="col-md-6 col-lg-4">
                    <div class="card mt-2" style="width: 100%;">
                        <img src="photo/m1.jpeg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Music
                            </h5>
                            <hr>
                            <div class="flex  d-flex justify-content-between ">
                                <div class="frist">
                                    <i class="fa-solid fa-user"> 5904</i>
                                </div>
                                <div class="second">
                                    <i class="fa-solid fa-eye">64831</i>

                                </div>
                            </div>
                            <hr>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card mt-2" style="width: 100%;">
                        <img src="photo/m2.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Music
                            </h5>
                            <hr>
                            <div class="flex  d-flex justify-content-between ">
                                <div class="frist">
                                    <i class="fa-solid fa-user"> 5904</i>
                                </div>
                                <div class="second">
                                    <i class="fa-solid fa-eye">64831</i>

                                </div>
                            </div>
                            <hr>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card mt-2" style="width: 100%;">
                        <img src="photo/m3.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Music
                            </h5>
                            <hr>
                            <div class="flex  d-flex justify-content-between ">
                                <div class="frist">
                                    <i class="fa-solid fa-user"> 5904</i>
                                </div>
                                <div class="second">
                                    <i class="fa-solid fa-eye">64831</i>

                                </div>
                            </div>
                            <hr>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>



            </div>
    `

        } else if (e.className == "seven") {

            section.innerHTML = `
             <div class="row m-2">

                <div class="col-md-6 col-lg-4">
                    <div class="card mt-2" style="width: 100%;">
                        <img src="photo/a1.jpeg" class="card-img-top" style="width: 100%;height: 200px;" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Data Analysis
                            </h5>
                            <hr>
                            <div class="flex  d-flex justify-content-between ">
                                <div class="frist">
                                    <i class="fa-solid fa-user"> 5904</i>
                                </div>
                                <div class="second">
                                    <i class="fa-solid fa-eye">64831</i>

                                </div>
                            </div>
                            <hr>
                            <p class="card-text">Some quick example text to build on the card title about informtion data analysis</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card mt-2" style="width: 100%;">
                        <img src="photo/a4.jpeg" class="card-img-top" style="width: 100%;height: 200px;" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Data Analysis
                            </h5>
                            <hr>
                            <div class="flex  d-flex justify-content-between ">
                                <div class="frist">
                                    <i class="fa-solid fa-user"> 5904</i>
                                </div>
                                <div class="second">
                                    <i class="fa-solid fa-eye">64831</i>

                                </div>
                            </div>
                            <hr>
                            <p class="card-text">Some quick example text to build on the card title</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card mt-2" style="width: 100%;">
                        <img src="photo/a3.jpeg" class="card-img-top" style="width: 100%;height: 200px;" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Data Analysis
                            </h5>
                            <hr>
                            <div class="flex  d-flex justify-content-between ">
                                <div class="frist">
                                    <i class="fa-solid fa-user"> 5904</i>
                                </div>
                                <div class="second">
                                    <i class="fa-solid fa-eye">64831</i>

                                </div>
                            </div>
                            <hr>
                            <p class="card-text">Some quick example text to build on the card title about informtion data analysis</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card mt-2" style="width: 100%;">
                        <img src="photo/a8.jpeg" class="card-img-top" style="width: 100%;height: 200px;" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Data Analysis
                            </h5>
                            <hr>
                            <div class="flex  d-flex justify-content-between ">
                                <div class="frist">
                                    <i class="fa-solid fa-user"> 5904</i>
                                </div>
                                <div class="second">
                                    <i class="fa-solid fa-eye">64831</i>

                                </div>
                            </div>
                            <hr>
                            <p class="card-text">Some quick example text to build on the card title</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card mt-2" style="width: 100%;">
                        <img src="photo/a5.jpeg" class="card-img-top" style="width: 100%;height: 200px;" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Data Analysis
                            </h5>
                            <hr>
                            <div class="flex  d-flex justify-content-between ">
                                <div class="frist">
                                    <i class="fa-solid fa-user"> 5904</i>
                                </div>
                                <div class="second">
                                    <i class="fa-solid fa-eye">64831</i>

                                </div>
                            </div>
                            <hr>
                            <p class="card-text">Some quick example text to build on the card title</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card mt-2" style="width: 100%;">
                        <img src="photo/a6.jpeg" class="card-img-top" style="width: 100%;height: 200px;" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Data Analysis
                            </h5>
                            <hr>
                            <div class="flex  d-flex justify-content-between ">
                                <div class="frist">
                                    <i class="fa-solid fa-user"> 5904</i>
                                </div>
                                <div class="second">
                                    <i class="fa-solid fa-eye">64831</i>

                                </div>
                            </div>
                            <hr>
                            <p class="card-text">Some quick example text to build on the card title</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card mt-2" style="width: 100%;">
                        <img src="photo/a9.jpeg" class="card-img-top" style="width: 100%;height: 200px;" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Data Analysis
                            </h5>
                            <hr>
                            <div class="flex  d-flex justify-content-between ">
                                <div class="frist">
                                    <i class="fa-solid fa-user"> 5904</i>
                                </div>
                                <div class="second">
                                    <i class="fa-solid fa-eye">64831</i>

                                </div>
                            </div>
                            <hr>
                            <p class="card-text">Some quick example text to build on the card title about informtion data analysis</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card mt-2" style="width: 100%;">
                        <img src="photo/a10.jpeg" class="card-img-top" style="width: 100%;height: 200px;" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Data Analysis
                            </h5>
                            <hr>
                            <div class="flex  d-flex justify-content-between ">
                                <div class="frist">
                                    <i class="fa-solid fa-user"> 5904</i>
                                </div>
                                <div class="second">
                                    <i class="fa-solid fa-eye">64831</i>

                                </div>
                            </div>
                            <hr>
                            <p class="card-text">Some quick example text to build on the card title about informtion data analysis</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card mt-2" style="width: 100%;">
                        <img src="photo/a11.jpeg" class="card-img-top" style="width: 100%;height: 200px;" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Data Analysis
                            </h5>
                            <hr>
                            <div class="flex  d-flex justify-content-between ">
                                <div class="frist">
                                    <i class="fa-solid fa-user"> 5904</i>
                                </div>
                                <div class="second">
                                    <i class="fa-solid fa-eye">64831</i>

                                </div>
                            </div>
                            <hr>
                            <p class="card-text">Some quick example text to build on the card title about informtion data analysis</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>
            </div>
            `
        } else if (e.className == "diff") {
            section.innerHTML = `
             <div class="row m-2">

                <div class="col-md-6 col-lg-4">
                    <div class="card mt-2" style="width: 100%;">
                        <img src="photo/gallery-02.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Ui & UX Design
                            </h5>
                            <hr>
                            <div class="flex  d-flex justify-content-between ">
                                <div class="frist">
                                    <i class="fa-solid fa-user"> 5904</i>
                                </div>
                                <div class="second">
                                    <i class="fa-solid fa-eye">64831</i>

                                </div>
                            </div>
                            <hr>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card mt-2" style="width: 100%;">
                        <img src="photo/gallery-03.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Ui & UX Design
                            </h5>
                            <hr>
                            <div class="flex  d-flex justify-content-between ">
                                <div class="frist">
                                    <i class="fa-solid fa-user"> 5904</i>
                                </div>
                                <div class="second">
                                    <i class="fa-solid fa-eye">64831</i>

                                </div>
                            </div>
                            <hr>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card mt-2" style="width: 100%;">
                        <img src="photo/gallery-04.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Ui & UX Design
                            </h5>
                            <hr>
                            <div class="flex  d-flex justify-content-between ">
                                <div class="frist">
                                    <i class="fa-solid fa-user"> 5904</i>
                                </div>
                                <div class="second">
                                    <i class="fa-solid fa-eye">64831</i>

                                </div>
                            </div>
                            <hr>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card mt-2" style="width: 100%;">
                        <img src="photo/gallery-06.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Ui & UX Design
                            </h5>
                            <hr>
                            <div class="flex  d-flex justify-content-between ">
                                <div class="frist">
                                    <i class="fa-solid fa-user"> 5904</i>
                                </div>
                                <div class="second">
                                    <i class="fa-solid fa-eye">64831</i>

                                </div>
                            </div>
                            <hr>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card mt-2" style="width: 100%;">
                        <img src="photo/gallery-04 (1).png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Ui & UX Design
                            </h5>
                            <hr>
                            <div class="flex  d-flex justify-content-between ">
                                <div class="frist">
                                    <i class="fa-solid fa-user"> 5904</i>
                                </div>
                                <div class="second">
                                    <i class="fa-solid fa-eye">64831</i>

                                </div>
                            </div>
                            <hr>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>



            </div>
            
            `
        }



    })
});
// ------------------------------------------------------------------------------
// start counter
let all_numbers = document.querySelectorAll(".proud .content .numbers .nums");
let section = document.querySelector(".proud").offsetTop;
window.onscroll = function() {
    all_numbers.forEach((e) => {
        let goal = parseInt(e.dataset.goal);
        if (window.scrollY + window.innerHeight >= section && goal > parseInt(e.textContent)) {
            update_number(e, goal);
        }


    })
};

function update_number(el, goal) {
    let current = parseInt(el.textContent);
    let incre = Math.ceil(goal / 100);
    let timer = setInterval(() => {
        current += incre;
        el.textContent = current;
        if (current >= goal) {
            el.textContent = goal;
            clearInterval(timer);
        }
    }, 30)
}


// ---------------------------------------------------------------------
// start popular courses
let part_two = document.querySelectorAll(".all .all_linkss button");
part_two.forEach((ee) => {
    let parent = document.querySelector(".popular_courses .content")

    ee.addEventListener("click", function() {
        if (ee.className == "ten") {
            parent.innerHTML = `
                <div class="row m-2">
                <div class="col-md-6 col-lg-4">
                    <div class="card mb-2" style="width:100%;">
                        <img src="photo/p1.png" class="card-img-top w-100" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Evnviroment Science</h5>
                            <p class="card-text">BAsic Master Study</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card mb-2" style="width:100%;">
                        <img src="photo/p2.jpeg" class="card-img-top w-100" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Development</h5>
                            <p class="card-text">The Set For Landscape Photograpgy</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card mb-2" style="width:100%;">
                        <img src="photo/p3.png" class="card-img-top w-100" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">360 Photo</h5>
                            <p class="card-text">How To Get Comfortable on Camera</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card mb-2" style="width:100%;">
                        <img src="photo/p4.jpeg" class="card-img-top w-100" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Electronic</h5>
                            <p class="card-text">How To be Dj ? Make Electronic Music</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card mb-2" style="width:100%;">
                        <img src="photo/p5.jpg" class="card-img-top w-100" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">PhotoGrapgy</h5>
                            <p class="card-text">Fashion PhotoGrapgy From Professional</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card mb-2" style="width:100%;">
                        <img src="photo/p6.png" class="card-img-top w-100" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Evnviroment Science</h5>
                            <p class="card-text">Vector Design Basic MasterClass</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>


            </div>
            
            
            `
        } else if (ee.className == "eleven") {
            parent.innerHTML = `
            <div class="row m-2">
                <div class="col-md-6 col-lg-4">
                    <div class="card mb-2" style="width:100%;">
                        <img src="photo/w1.png" class="card-img-top w-100" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">wigth Traning</h5>
                            <p class="card-text">Swinmng Sport trikces For Beginner</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card mb-2" style="width:100%;">
                        <img src="photo/w2.png" class="card-img-top w-100" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">wigth Traning</h5>
                            <p class="card-text">Skiing Basic Introduction And Videos</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card mb-2" style="width:100%;">
                        <img src="photo/w3.png" class="card-img-top w-100" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">wigth Traning</h5>
                            <p class="card-text">wigth Traning Courses With Di</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card mb-2" style="width:100%;">
                        <img src="photo/w4.jpg" class="card-img-top w-100" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">wigth Traning</h5>
                            <p class="card-text">Run Foresr The Sea</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card mb-2" style="width:100%;">
                        <img src="photo/w5.jpeg" class="card-img-top w-100" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">wigth Traning</h5>
                            <p class="card-text">Road Bike Manual How Be Chmapion</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>



            </div>
            `
        } else if (ee.className == "twelv") {
            parent.innerHTML = `
             <div class="row m-2">

                <div class="col-md-6 col-lg-4">
                    <div class="card mb-2" style="width:100%;">
                        <img src="photo/s1.png" class="card-img-top w-100" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Apache</h5>
                            <p class="card-text">Web Coding And Apache Basic</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card mb-2" style="width:100%;">
                        <img src="photo/s2.jpeg" class="card-img-top w-100" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Software Development</h5>
                            <p class="card-text">Engine Creating on Unity From pro</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card mb-2" style="width:100%;">
                        <img src="photo/s1.png" class="card-img-top w-100" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Apache</h5>
                            <p class="card-text">Web Coding And Apache Basic</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>



            </div>
`
        }





    })
});