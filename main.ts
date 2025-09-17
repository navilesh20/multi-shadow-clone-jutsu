let mySprite: Sprite = null
forever(function () {
    controller.moveSprite(mySprite)
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . a a a a a a a . . . . . 
        . . . . a 3 a a a 3 a . . . . . 
        . . . . a a a a a a a . . . . . 
        . . . . a a a a a a a . . . . . 
        . . . . a a 3 3 3 a a . . . . . 
        . . . . a a a a a a a . . . . . 
        3 3 3 . . . 3 3 3 . 3 3 3 3 3 3 
        . . 3 3 3 3 3 3 3 3 3 . . . . . 
        . . . . . . 3 3 3 . . . . . . . 
        . . . . . . 3 3 3 . . . . . . . 
        . . . . . . 3 3 3 . . . . . . . 
        . . . . . . 3 . 3 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
})
