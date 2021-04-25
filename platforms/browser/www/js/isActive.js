$('.select-list .select-item').on('click', function () {
    $( ".select-list .select-item" ).removeClass( 'active' );
        $( this ).addClass( 'active' );
        var url_string = window.location.href

        if(url_string != "http://localhost:3000/UCL.html") {
            window.location.href = "/UCL.html"
        }
        $.ajax({
            url: "http://localhost:8080/leagueByTeam/"+$(this).attr('id'),
            dataType: 'json',
            type: 'GET',
        }).done(function (response) {
           
            $(".club-img").remove()
            $(".sub-data").remove()
            $(".sub-data").remove()
            $(".sub-data-list").remove()

            response.clubs.map((el, index) => {
                $(".table-left-list").append(`<div class="club-img" onclick="getDetail('${el.cId._id}')">
                            <img src="${el.cId.avatar}" alt="">
                            <span>${el.cId.clubName}</span>
                        </div>`)
                $('.table-middler-MP').append( `<div class="sub-data">
                            ${el.detai[0]}
                        </div>`)
    $(".table-middler-W").append( `<div class="sub-data">
                            ${el.detai[1]}
                        </div>`)
    $(".table-middler-D").append( `<div class="sub-data">
                            ${el.detai[2]}
                        </div>`)
    $(".table-middler-L").append( `<div class="sub-data">
                            ${el.detai[3]}
                        </div>`)
    $(".table-middler-Pts").append( `<div class="sub-data">
                            ${el.detai[4]}
                        </div>`)
    $(".table-middler-GF").append( `<div class="sub-data">
                            ${el.detai[5]}
                        </div>`)
    $(".table-middler-GA").append( `<div class="sub-data">
                            ${el.detai[6]}
                        </div>`)
    $(".table-middler-GD").append( `<div class="sub-data">
                            ${el.detai[7]}
                        </div>`)
    $(".table-middler-last").append( `<div class="sub-data-list"> 
                        </div>`)
                        var add = `.sub-data-list:nth-child(${index + 2})`
                        el.last.forEach(element => {
                            if(element == 0) {
                                $(add).append(`<div class="red-square"></div`)
                            }else{
                                $(add).append(`<div class="green-square"></div`)
    
                            }
    
                        }) 
            })
        })
});