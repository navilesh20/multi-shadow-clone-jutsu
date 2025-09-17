mySprite: Sprite = None

def on_forever():
    global mySprite
    controller.move_sprite(mySprite)
    mySprite = sprites.create(img("""
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
            """),
        SpriteKind.player)
forever(on_forever)
