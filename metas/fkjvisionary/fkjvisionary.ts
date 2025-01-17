
export class FKJVisionary implements ISystem {
  META_ID = 90 // Change to your MetaZone meta number identifier

  api = null
  host = null

  /// --- Lets make a 3D model ---
  mercedes = null

  /**
   * Initial scene setup, create all objects in the constructor.
   *
   * @param api          Used to call MetaZone API endpoints.
   * @param host_data    Very first
   */
  constructor(api, host_data) {
    // Save api
    this.api = api;



    ///////// Your static scene assets ///////////
    // Initialize all scene entities here

    /// --- Lets spawn a 3d model ---
    this.mercedes = new Entity()
    this.mercedes.addComponent(new GLTFShape('metas/fkjvisionary/models/mercedes.glb'))
    this.mercedes.addComponent(new Transform({
        position: new Vector3(8, 0, 8),
        scale: new Vector3(1, 1, 1)
        }))
    engine.addEntity(this.mercedes)


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
    this.mercedes.addComponent(animator)

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


    clipOpenDoorR.playing = true
    clipOpenDoorR.looping = true

    clipOpenDoorL.playing = true
    clipOpenDoorL.looping = true

    clipTurnWheelB.playing = true
    clipTurnWheelB.looping = true

    clipTurnWheelR.playing = true
    clipTurnWheelR.looping = true

    clipTurnWheelL.playing = true
    clipTurnWheelL.looping = true

    clipOnLed1.playing = true
    clipOnLed1.looping = true

    clipOnLed2.playing = true
    clipOnLed2.looping = true

    clipSkidCar.playing = true
    clipSkidCar.looping = true

    ///////// Your static scene assets ///////////



    // Initial host data
    this.refreshHost(host_data)
  }

  /**
   * A Decentraland provided function where you should put your code that
   * repeats over and over.
   *
   * @param dt     Delta time since last update
   */
  update(dt: number) {
    // Note: your code that repeats goes here
  }

  /**
   * A MetaZone provided function that contains data customized by the
   * landowner on the MetaZone.io system. This gets called every minute when it
   * is deployed live. During testing its called once in the game.ts file.
   *
   * @param host_data    Data sent from the MetaZone backend to update your Meta
   */
  refreshHost(host_data) {
    // Save host info
    this.host = host_data

    // Parse metadata
    if(this.host.metadata) {
      let metadata = JSON.parse(this.host.metadata)

      ///////// Your landowner adjustable content ///////////
      // You decide which of your creation's entities the landowner can adjust.

      /// --- Lets adjust our 3d model ---
      this.mercedes.getComponent(Transform).position.set(
        metadata.vehicle.position.x,
        metadata.vehicle.position.y,
        metadata.vehicle.position.z
      )
      this.mercedes.getComponent(Transform).scale.set(
        metadata.vehicle.scale.x,
        metadata.vehicle.scale.y,
        metadata.vehicle.scale.z
      )
      this.mercedes.getComponent(Transform).rotation.setEuler(
        metadata.vehicle.rotation.x,
        metadata.vehicle.rotation.y,
        metadata.vehicle.rotation.z
      )

      ///////// Your landowner adjustable content ///////////
    }
  }

}
