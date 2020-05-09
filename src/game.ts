//////////////////////////
// The Car




const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("models/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

let mercedes = new Entity()
mercedes.addComponent(new GLTFShape("models/mercedes.glb"))
mercedes.addComponent(new Transform({ 
    position: new Vector3(8, 0, 8), 
    scale: new Vector3(1, 1, 1)
    }))
engine.addEntity(mercedes)


//basic animation test V.1

//const animator = new Animator()
//let clipOpenCurtainR = new AnimationState('openCurtainR')
//let clipCloseCurtainR = new AnimationState('closeCurtainR')
//animator.addClip(clipCloseCurtainR)
//animator.addClip(clipOpenCurtainR)

//clipOpenCurtainR.playing = false
//clipOpenCurtainR.looping = false
//clipCloseCurtainR.playing = true
//clipCloseCurtainR.looping = true
//structure.addComponent(animator)


//const openCurtainRClip = new AnimationState("openCurtainR")
//openCurtainRClip.play()

//test2

//structure.addComponent(new Animator())
//structure.getComponent(Animator).addClip(new AnimationState("openCurtainR"))
//let clipOpenCurtainR = Animator.getClip("openCurtainR")
//clipOpenCurtainR.play()
//clipOpenCurtainR.loop()

// Create animator component
let animator = new Animator()


// Add animator component to the entity
mercedes.addComponent(animator)


// Instance animation clip object
const clipOpenDoorR = new AnimationState("openDoorR")
const clipOpenDoorL = new AnimationState("openDoorL")
const clipTurnWheelL = new AnimationState("turnWheelL")
const clipTurnWheelR = new AnimationState("turnWheelR")
const clipTurnWheelB = new AnimationState("turnWheelB")
const clipOnLed1 = new AnimationState("onLed1")
const clipOnLed2 = new AnimationState("onLed2")
const clipSkidCar = new AnimationState("skidCar")

// Add animation clip to Animator component


animator.addClip(clipOpenDoorR)
animator.addClip(clipOpenDoorL)
animator.addClip(clipTurnWheelB)
animator.addClip(clipTurnWheelR)
animator.addClip(clipTurnWheelL)
animator.addClip(clipOnLed1)
animator.addClip(clipOnLed2)
animator.addClip(clipSkidCar)













clipOpenDoorR.play()
clipOpenDoorL.play()
clipTurnWheelB.play()
clipTurnWheelR.play()
clipTurnWheelL.play()
clipOnLed1.play()
clipOnLed2.play()
clipSkidCar.play()