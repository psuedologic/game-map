$(document).ready(main)

var map
const windowParams = new URLSearchParams(window.location.search)

function main() {
    map = L.map('map', {
        crs: L.CRS.Simple,
        minZoom: -5
    })

    var bounds = [[0,0], [660, 1020]]
    var image = L.imageOverlay(getImage(), bounds)
                .addTo(map)
    window.image = image

    map.fitBounds(bounds)
    map.setView([500, 400], 1)

    let luskan = L.circleMarker( {lat: 570.42564, lng: 394.35136} ).addTo(map)
    luskan.bindPopup('This is the city of Luskan')
    initMenu()

    
}

function getImage() {
    return `images/${windowParams.get('image')}`
}

function showMarkerSelector() {
    let popupContainer = document.createElement('div')
    popupContainer.className = 'popupSelector'
    document.body.appendChild(popupContainer)

    let selector = new Croppie(popupContainer, {
        viewport: {
            width: 50, 
            height: 50,
            type: 'circle',
        },
        boundary: { 
            width: 300, 
            height: 300            
        },
        
        showZoomer: false,
        //enableResize: true,
        //enableOrientation: true
    })

    window.selector = selector

    let image = document.querySelector('div.popupSelector > div.cr-boundary > img.cr-image')

    imageData = "data:image/png;base64,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"

    devResetView() 

    selector.bind({
        url: getImage()
    })

    //popup.innerHTML = ``
}

function devResetView() {
    let image = document.querySelector('div.popupSelector > div.cr-boundary > img.cr-image')
    image.style = 'opacity: 1; transform: translate3d(-3792.87px, -746.486px, 0px) scale(1.5); transform-origin: 3942.87px 896.486px 0px;'
}

function initMenu() {
    document.addEventListener('contextmenu', function(e) {
        //Draw Right Click Menu Here
        e.preventDefault()
    }, false)

    L.control.custom({
        position: 'topleft',
        content : '<button type="button" class="btn btn-default">'+
                '    <i data-target="markerFinder" class="fa fa-2x fa-map-marker"></i>'+
                '</button>'+
                '<button type="button" class="btn btn-default">'+
                '    <i data-target="devResetView" class="fa fa-2x fa-crosshairs"></i>'+
                '</button>'+
                '<button type="button" class="btn btn-info">'+
                '    <i class="fa fa-2x fa-compass"></i>'+
                '</button>'+
                '<button type="button" class="btn btn-primary">'+
                '    <i class="fa fa-2x fa-spinner fa-pulse fa-fw"></i>'+
                '</button>'+
                '<button type="button" class="btn btn-danger">'+
                '    <i class="fa fa-2x fa-times"></i>'+
                '</button>'+
                '<button type="button" class="btn btn-success">'+
                '    <i class="fa fa-2x fa-check"></i>'+
                '</button>'+
                '<button type="button" class="btn btn-warning">'+
                '    <i class="fa fa-2x fa-exclamation-triangle"></i>'+
                '</button>',
        classes : 'btn-group-vertical btn-group-sm',
        style   :
        {
            margin: '10px',
            padding: '0px 0 0 0',
            cursor: 'pointer',
        },
        datas   :
        {
            'foo': 'bar',
        },
        events:
        {
            click: function(data)
            {
                let buttonI = data.target
                switch (buttonI.getAttribute("data-target")) {
                    case ("markerFinder"):
                        showMarkerSelector()
                        break;
                    case ("devResetView"):
                        devResetView() 
                        break;
                }


                console.log('wrapper div element clicked')
                console.log(data)
            },
            dblclick: function(data)
            {
                console.log('wrapper div element dblclicked')
                console.log(data)
            },
            contextmenu: function(data)
            {
                console.log('wrapper div element contextmenu')
                console.log(data)
            },
        }
    })
    .addTo(map)
}