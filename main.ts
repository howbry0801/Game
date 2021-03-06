controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.pewPew.play()
    projectile = sprites.createProjectileFromSprite(img`
        7 
        1 
        1 
        `, Fighter_Jet, 0, -100)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    Fighter_Jet.destroy(effects.bubbles, 500)
    info.changeLifeBy(-1)
    music.zapped.play()
    game.reset()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.bubbles, 500)
    info.changeScoreBy(1)
    music.sonar.play()
})
let Ghost: Sprite = null
let projectile: Sprite = null
let Fighter_Jet: Sprite = null
effects.starField.startScreenEffect()
Fighter_Jet = sprites.create(img`
    . . . . . . . 2 . . . . . . . 
    . . . . . . 1 2 1 . . . . . . 
    . . . . . 1 1 2 1 1 . . . . . 
    . . . . 1 1 1 2 1 1 1 . . . . 
    . . . 1 1 5 1 2 1 5 1 1 . . . 
    . . 1 1 1 1 1 2 1 1 1 1 1 . . 
    . . 1 1 1 1 1 2 1 1 1 1 1 . . 
    . . 1 1 1 1 1 2 1 1 1 1 1 . . 
    . . 1 1 1 1 1 2 1 1 1 1 1 . . 
    . 1 1 1 1 1 1 2 1 1 1 1 1 1 . 
    . 1 1 1 1 1 . . . 1 1 1 1 1 . 
    . 1 1 1 1 . . . . . 1 1 1 1 . 
    . 1 1 1 . . . . . . . 1 1 1 . 
    . 1 1 . . . . . . . . . 1 1 . 
    . 1 . . . . . . . . . . . 1 . 
    `, SpriteKind.Player)
Fighter_Jet.setPosition(84, 98)
controller.moveSprite(Fighter_Jet)
info.setLife(1)
game.onUpdateInterval(500, function () {
    Ghost = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    Ghost.setPosition(randint(0, scene.screenWidth()), 0)
    Ghost.follow(Fighter_Jet, 50)
})
