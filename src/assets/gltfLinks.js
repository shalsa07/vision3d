const gltffiles={
    houses:[
        {name:'opt1',path:'./assets/msmudenda/house opt-1 simple.glb'},
        // {name:'opt1',path:'./assets/msmudenda/house opt-1.glb'},
        // {name:'opt2',path:'./assets/msmudenda/house opt-2.glb'},
    ],

    placeHolder:{name:'opt1',path:'./assets/msmudenda/house opt-1 placeHolder.glb'},
    
    opt1:[
        {name:'opt1Grd',path:'./assets/msmudenda/option1/house opt 1 grd.glb'},
        {name:'opt11st',path:'./assets/msmudenda/option1/house opt 1 1st.glb'},
        {name:'opt1Roof',path:'./assets/msmudenda/option1/house opt 1 roof.glb'},
        {name:'opt1Snaps',path:'./assets/msmudenda/option1/house opt 1 snaps.glb'},
        {name:'opt1',path:'./assets/msmudenda/option1/house opt 1.glb'},
        {name:'opt11stFrun',path:'./assets/msmudenda/option1/house opt1 grd furn.glb'},
        {name:'opt1GrdFrun',path:'./assets/msmudenda/option1/house opt1 1st furn.glb'},
    ],
    opt2:[
        {name:'opt2Grd',path:'./assets/msmudenda/option2/house opt 2 grd.glb'},
        {name:'opt21st',path:'./assets/msmudenda/option2/house opt 2 1st.glb'},
        {name:'opt2Roof',path:'./assets/msmudenda/option2/house opt 2 roof.glb'},
        {name:'opt21stFrun',path:'./assets/msmudenda/option2/house opt2 grd furn.glb'},
        {name:'opt2GrdFrun',path:'./assets/msmudenda/option2/house opt2 1st furn.glb'},
    ],
    supportFiles:[
        {name:'cars',path:'./assets/msmudenda/cars.glb'},
        {name:'vegetation',path:'./assets/msmudenda/vegetation.glb'},
        // {name:'opt1FurnGrd',path:'./assets/msmudenda/house_opt1_grd_furn.glb'},
        // {name:'opt1Furn1st',path:'./assets/msmudenda/house_opt1_1st_furn.glb'},
        // {name:'site',path:'./assets/msmudenda/site.glb'},
        // {name:'site',path:'./assets/msmudenda/site simple.glb'},
        // {name:'furnPool',path:'./assets/msmudenda/furnPool.glb'},
        // {name:'snapPoints',path:'./assets/msmudenda/snapPoints.glb'}
    ]
}

const _360s=[
    {title:'driveway',url:'./assets/msmudenda/option1/Opt1_360_0000.jpg'},
    {title:'pool',url:'./assets/msmudenda/option1/Opt1_360_0001.jpg'},
    {title:'side view 1',url:'./assets/msmudenda/option1/Opt1_360_0002.jpg'},
    {title:'side view 2',url:'./assets/msmudenda/option1/Opt1_360_0003.jpg'},
    {title:'driveway',url:'./assets/msmudenda/option2/Opt2_360_0000.jpg'},
    {title:'pool',url:'./assets/msmudenda/option2/Opt2_360_0001.jpg'},
    {title:'side view 1',url:'./assets/msmudenda/option2/Opt2_360_0002.jpg'},
    {title:'side view 2',url:'./assets/msmudenda/option2/Opt2_360_0003.jpg'},
]

const enviHdriMap='./assets/enviMap.hdr'

const textures={
    opt1_textures:{
        int_AO:'./assets/msmudenda/option1/textures/int__CyclesBake_COMBINED.jpg',
        int_diffuse:'./assets/msmudenda/option1/textures/int__PBR_Ambient-Occlusion.jpg',
        main_AO:'./assets/msmudenda/option1/textures/main__CyclesBake_COMBINED.jpg',
        main_diffuse:'./assets/msmudenda/option1/textures/main__PBR_Ambient-Occlusion.jpg',
        plaster_AO:'./assets/msmudenda/option1/textures/plaster__CyclesBake_COMBINED.jpg',
        plaster_diffuse:'./assets/msmudenda/option1/textures/plaster__PBR_Ambient-Occlusion.jpg',
        texured_AO:'./assets/msmudenda/option1/textures/textured__PBR_Ambient-Occlusion.jpg',
        texured_diffuse:'./assets/msmudenda/option1/textures/textured__CyclesBake_COMBINED.jpg',
    },

    opt2_textures:{
        plast:'./assets/msmudenda/option1/textures/plast_diffuse.jpg',
        text:'./assets/msmudenda/option1/textures/text_diffuse.jpg',
        plast_int:'./assets/msmudenda/option1/textures/plast_int_diffuse.jpg',
        plast_int_roughness:'./assets/msmudenda/option1/textures/Plaster_roughness.jpg',
        plast_int_spec:'./assets/msmudenda/option1/textures/Plaster_specular.jpg'
    },

    site_textures:{
        site_diff:'./assets/msmudenda/textures/site__diffuse.jpg',
        site_ao:'./assets/msmudenda/textures/site__A0.jpg',
        site_rough:'./assets/msmudenda/textures/site_roughness.jpg',
        site_spec:'./assets/msmudenda/textures/site_spec.jpg',
    }
}

const uiItems={

    logoPng:'./logo.png',
    logoText:'luyaridesigns',
    section:[
        {
            id:1,
            title:'drawings',
            desc:'Lorem, ipsum dolor sit amet consectetur adipisicing',
            imgs:[
                {id:'option 1: sunStudy',option:'option 1',url:'./assets/msmudenda/option1/opt1_sunStudy.jpg'},
                {id:'option 1: site',option:'option 1',url:'./assets/msmudenda/option1/opt1_site.jpg'},
                {id:'option 1: plans',option:'option 1',url:'./assets/msmudenda/option1/opt1_plans.jpg'},
                {id:'option 1: elevations',option:'option 1',url:'./assets/msmudenda/option1/opt1_elevations.jpg'},
                {id:'option 2: sunStudy',option:'option 2',url:'./assets/msmudenda/option2/opt2_sunStudy.jpg'},
                {id:'option 2: site',option:'option 2',url:'./assets/msmudenda/option2/opt2_site.jpg'},
                {id:'option 2: plans',option:'option 2',url:'./assets/msmudenda/option2/opt2_plans.jpg'},
                {id:'option 2: elevations',option:'option 2',url:'./assets/msmudenda/option2/opt2_elevations.jpg'},
            ],
            instructionsTitle:'Lorem, ipsum dolor sit amet',
            instructions:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis at alias illo porro et minus excepturi aperiam debitis quidem, veniam dolores explicabo totam tempore est dicta repellat ipsum ex sed?',
        },
        {
            id:2,
            title:'renderings',
            desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis at alias illo porro et minus excepturi aperiam debitis quidem, veniam dolores explicabo totam tempore est dicta repellat ipsum ex sed?',
            imgs:[
                {id:'option 1: road 1',option:'option 1',url:'./assets/msmudenda/option1/0000_Opt1.jpg'},
                {id:'option 1: road 2',option:'option 1',url:'./assets/msmudenda/option1/0001_Opt1.jpg'},
                {id:'option 1: side-view',option:'option 1',url:'./assets/msmudenda/option1/0002_Opt1.jpg'},
                {id:'option 1: pool 1',option:'option 1',url:'./assets/msmudenda/option1/0003_Opt1.jpg'},
                {id:'option 2: road 1',option:'option 2',url:'./assets/msmudenda/option2/0000_Opt2.jpg'},
                {id:'option 2: road 2',option:'option 2',url:'./assets/msmudenda/option2/0001_Opt2.jpg'},
                {id:'option 2: side-view',option:'option 2',url:'./assets/msmudenda/option2/0002_Opt2.jpg'},
                {id:'option 2: pool 1',option:'option 2',url:'./assets/msmudenda/option2/0003_Opt2.jpg'},
                {id:'lounge view-1',option:'option 1',url:'./assets/msmudenda/0004.jpg'},
                {id:'lounge view-2',option:'option 1',url:'./assets/msmudenda/0005.jpg'},
                {id:'lounge view-3',option:'option 1',url:'./assets/msmudenda/0006.jpg'},
                {id:'stairs',option:'option 1',url:'./assets/msmudenda/0007.jpg'},
                {id:'kitchen view-1',option:'option 1',url:'./assets/msmudenda/0008.jpg'},
                {id:'kitchen view-2',option:'option 1',url:'./assets/msmudenda/0009.jpg'},
            ],
            instructions:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. ',
        },
    ],

    popup:[
        {id:'option 1: sunStudy',option:'option 1',url:'./assets/msmudenda/option1/opt1_sunStudy.jpg'},
        {id:'option 1: site',option:'option 1',url:'./assets/msmudenda/option1/opt1_site.jpg'},
        {id:'option 1: plans',option:'option 1',url:'./assets/msmudenda/option1/opt1_plans.jpg'},
        {id:'option 1: elevations',option:'option 1',url:'./assets/msmudenda/option1/opt1_elevations.jpg'},
        {id:'option 1: road 1',option:'option 1',url:'./assets/msmudenda/option1/0000_Opt1.jpg'},
        {id:'option 1: road 2',option:'option 1',url:'./assets/msmudenda/option1/0001_Opt1.jpg'},
        {id:'option 1: side-view',option:'option 1',url:'./assets/msmudenda/option1/0002_Opt1.jpg'},
        {id:'option 1: pool 1',option:'option 1',url:'./assets/msmudenda/option1/0003_Opt1.jpg'},
        {id:'option 2: sunStudy',option:'option 2',url:'./assets/msmudenda/option2/opt2_sunStudy.jpg'},
        {id:'option 2: site',option:'option 2',url:'./assets/msmudenda/option2/opt2_site.jpg'},
        {id:'option 2: plans',option:'option 2',url:'./assets/msmudenda/option2/opt2_plans.jpg'},
        {id:'option 2: elevations',option:'option 2',url:'./assets/msmudenda/option2/opt2_elevations.jpg'},
        {id:'option 2: road 1',option:'option 2',url:'./assets/msmudenda/option2/0000_Opt2.jpg'},
        {id:'option 2: road 2',option:'option 2',url:'./assets/msmudenda/option2/0001_Opt2.jpg'},
        {id:'option 2: side-view',option:'option 2',url:'./assets/msmudenda/option2/0002_Opt2.jpg'},
        {id:'option 2: pool',option:'option 2',url:'./assets/msmudenda/option2/0003_Opt2.jpg'},
        {id:'lounge view-1',option:'option 1',url:'./assets/msmudenda/0004.jpg'},
        {id:'lounge view-2',option:'option 1',url:'./assets/msmudenda/0005.jpg'},
        {id:'lounge view-3',option:'option 1',url:'./assets/msmudenda/0006.jpg'},
        {id:'stairs',option:'option 1',url:'./assets/msmudenda/0007.jpg'},
        {id:'kitchen view-1',option:'option 1',url:'./assets/msmudenda/0008.jpg'},
        {id:'kitchen view-2',option:'option 1',url:'./assets/msmudenda/0009.jpg'},
    ],

    desc: {
        title:'2 bedroomed house',
        descTitle:'model',
        desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis at alias illo porro et minus excepturi aperiam debitis quidem, veniam dolores explicabo totam tempore est dicta repellat ipsum ex sed?',
    },

    roomCord:{
        driveway:[-14,-2,-16,180,-14,-2,-15],
        pool:[0,-1,-19,180,-7,-1,10],
        lounge:[15,-1,-20,180,-15,-1,15],
        stairs:[14.-1,-11,180,-16,-1,9],
        kitchen:[-11,-.6,6.5,0,-11,-.6,7.5],
        bedroom:[-8,-4.6,0,-9,-4.6,1],
        balcony:[13,-4.6,-11,180,13,-4.6,-9],
    }
}

export {gltffiles,_360s,textures,enviHdriMap,uiItems}
