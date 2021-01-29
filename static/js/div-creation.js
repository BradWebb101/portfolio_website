$(document).ready(function () {
        var data = fetch('https://kfipmta4tf.execute-api.eu-west-2.amazonaws.com/porfoliowebsite_index/', {
            method: 'GET'
        }).then(response => response.json()).then(data => renderDivs(data))

    }
)

$(document).ready(function(){
    var win = $(this);
    if (win.width() < 1024) { 

    $('nes-bulbasaur').addClass('nes-icon trophy').removeClass('nes-bulbasaur');  
    $('nes-squirtle').addClass('nes-icon trophy').removeClass('nes-squirtle');
    $('nes-charmander').addClass('nes-icon trophy').removeClass('nes-charmander');
}
});


function renderDivs(data) {
    for (const [key, value] of Object.entries(data)) {
        if (data[key]['display_front']['S'] === 'yes'){
            var win = $(this);
        if (win.width() > 1024) {
            var imageQuery = `<i id='${data[key]['image']['S'].split(4)}' class="${data[key]['image']['S']}">`}
        else {
            var imageQuery = `<i id='${data[key]['image']['S'].split(4)}' class="nes-icon trophy">`
            }
        var html_tags = (
            `<div class="row" style="margin-top: 30px; margin-bottom: 30px;">
                 <div class="col-xs-2">
                     ${imageQuery}
                     </i>
                 </div>
             <div class="col-xs-10">
                 <h3>${data[key]["project_name"]["S"]}</h3>
                 <p>${data[key]['description']['S']}</p>
           <a href="${data[key]['github_link']['S']}" target='_blank'>Source code</a>
           `
        )
        if (data[key]['web_link']['S'] !== ''){
            html_tags.concat(`| <a href="{{ data['1']['web_link']['S'] }}" target='_blank'>Site</a>`)
        }
        html_tags.concat(`</div>
        </div>`)
        
        $('#portfolio_container').append(html_tags)
    }}


};



