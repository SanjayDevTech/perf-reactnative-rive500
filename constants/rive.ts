class RiveObj {
  resId: string;
  stateMachineName: string | undefined;
  artboardName: string | undefined;
  constructor(resId: string, options?: {
    stateMachineName?: string;
    artboardName?: string;
  }) {
    this.resId = resId;
    this.stateMachineName = options?.stateMachineName;
    this.artboardName = options?.artboardName;
  }
}

export const riveObjects = [
  new RiveObj('soarus', { stateMachineName: 'DinoMove!' }),
  new RiveObj('dragon_ride', { stateMachineName: 'State Machine 1' }),
  new RiveObj('panda', { artboardName: 'normal way', stateMachineName: 'State Machine 1' }),
  new RiveObj('walk_boom', { stateMachineName: 'State Machine 1' }),
  new RiveObj('ori', { stateMachineName: 'State Machine 1' }),
  new RiveObj('guitargirl', { stateMachineName: 'State Machine 1' }),
  new RiveObj('dog_escape', { stateMachineName: 'State Machine 1' }),
  new RiveObj('alien', { stateMachineName: 'State Machine 1' }),
  new RiveObj('walk_cycle_blend', { artboardName: 'combined', stateMachineName: 'State Machine 1' }),
  new RiveObj('testjoystickplanet', { stateMachineName: 'Dance' }),
  new RiveObj('pencil_dude_hello'),
  new RiveObj('artist', { artboardName: 'Artist Comp' }),
  new RiveObj('big_wheel_demo', { stateMachineName: 'State Machine 1' }),
  new RiveObj('chatbot', { stateMachineName: 'State Machine 1' }),
  new RiveObj('_2d_girl', { artboardName: '2dGirl', stateMachineName: 'State Machine 1' }),
  new RiveObj('luke_vs_darth'),
  new RiveObj('flying'),
  new RiveObj('spacecow', { stateMachineName: 'State Machine 1' }),
  new RiveObj('smileys', { stateMachineName: 'controller' }),
  new RiveObj('cat'),
  new RiveObj('football_time', { stateMachineName: 'State Machine 1' }),
  new RiveObj('walle', { stateMachineName: 'State Machine 1' }),
  new RiveObj('game_character_demo'),
  new RiveObj('sketis', { artboardName: 'Sketis', stateMachineName: 'State Machine 1' }),
  new RiveObj('donnie_the_dino', { stateMachineName: 'State Machine 1' }),
  new RiveObj('flame_and_spark'),
  new RiveObj('thats_no_moon'),
  new RiveObj('anime_girl', { stateMachineName: 'State Machine 1' }),
  new RiveObj('pull_to_refresh_'),
  new RiveObj('bat', { stateMachineName: 'State Machine 1' }),
  new RiveObj('floaty_boi'),
  new RiveObj('zoom_loop_nested_artboards_example'),
  new RiveObj('happy_little_robot', { stateMachineName: 'State Machine 1' }),
  new RiveObj('book'),
  new RiveObj('mech_publish', { stateMachineName: 'walkStateMachine' }),
  new RiveObj('robot_puppet'),
  new RiveObj('castle_demo'),
  new RiveObj('juicy_walk'),
  new RiveObj('knight'),
  new RiveObj('doggo'),
  new RiveObj('paint'),
  new RiveObj('girl_black_hair'),
  new RiveObj('truck', { stateMachineName: 'drive' }),
  new RiveObj('rigging_a_character', { stateMachineName: 'State Machine 1' }),
  new RiveObj('polito', { stateMachineName: 'State Machine 1' }),
  new RiveObj('hero_use_case', { stateMachineName: 'State Machine 1' }),
  new RiveObj('mixing_animations', { stateMachineName: 'State Machine 1' }),
  new RiveObj('login_screen_character', { stateMachineName: 'State Machine 1' }),
  new RiveObj('gost', { stateMachineName: 'State Machine 1' }),
  new RiveObj('game_controller', { stateMachineName: 'State Machine 1' })
];
