import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../b88efbbf-2a9a-47b4-86e1-e38ecc2b433b/src/item"
import Script2 from "../a747f104-5434-42a8-a543-8739c24cf253/src/item"
import Script3 from "../b853061a-bf5a-4d76-b7f1-92ed9ea4a8bf/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const hasedera3 = new Entity('hasedera3')
engine.addEntity(hasedera3)
hasedera3.setParent(_scene)
const transform2 = new Transform({
  position: new Vector3(16, 0.4154996871948242, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9018561840057373, 0.9018561840057373, 0.9018561840057373)
})
hasedera3.addComponentOrReplace(transform2)
const gltfShape = new GLTFShape("103e143c-8faa-4c31-bd0e-bbe2adc7ce1f/hasedera02.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
hasedera3.addComponentOrReplace(gltfShape)

const doom = new Entity('doom')
engine.addEntity(doom)
doom.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(16.16717529296875, 0, 15.92082405090332),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
doom.addComponentOrReplace(transform3)
const gltfShape2 = new GLTFShape("564e2cb9-3b67-415b-b4ac-f5d09afe1d24/doom.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
doom.addComponentOrReplace(gltfShape2)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape3 = new GLTFShape("6b33f46e-9667-45e5-bd90-85f372ee2490/CityTile.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
entity.addComponentOrReplace(gltfShape3)
const transform4 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform4)

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape3)
const transform5 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform5)

const entity3 = new Entity('entity3')
engine.addEntity(entity3)
entity3.setParent(_scene)
entity3.addComponentOrReplace(gltfShape3)
const transform6 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity3.addComponentOrReplace(transform6)

const entity4 = new Entity('entity4')
engine.addEntity(entity4)
entity4.setParent(_scene)
entity4.addComponentOrReplace(gltfShape3)
const transform7 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity4.addComponentOrReplace(transform7)

const dase3 = new Entity('dase3')
engine.addEntity(dase3)
dase3.setParent(_scene)
const gltfShape4 = new GLTFShape("30ca0fce-dd47-4428-85c2-eac913d6d069/dase.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
dase3.addComponentOrReplace(gltfShape4)
const transform8 = new Transform({
  position: new Vector3(25.49257469177246, 1.852151870727539, 14.999268531799316),
  rotation: new Quaternion(0.19415093958377838, -0.0961337685585022, 0.019122187048196793, 0.976062536239624),
  scale: new Vector3(0.3198898136615753, 0.27699437737464905, 0.3359643816947937)
})
dase3.addComponentOrReplace(transform8)

const dase = new Entity('dase')
engine.addEntity(dase)
dase.setParent(_scene)
dase.addComponentOrReplace(gltfShape4)
const transform9 = new Transform({
  position: new Vector3(6.597545146942139, 1.852151870727539, 14.990392684936523),
  rotation: new Quaternion(0.19415093958377838, 0.0961337685585022, -0.019122231751680374, 0.976062536239624),
  scale: new Vector3(0.31988978385925293, 0.27699437737464905, 0.3359643816947937)
})
dase.addComponentOrReplace(transform9)

const externalLink = new Entity('externalLink')
engine.addEntity(externalLink)
externalLink.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(29.289199829101562, 1.729848027229309, 28.737634658813477),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
externalLink.addComponentOrReplace(transform10)

const kaitenPe = new Entity('kaitenPe')
engine.addEntity(kaitenPe)
kaitenPe.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(15.38644790649414, 11.5, 17.022958755493164),
  rotation: new Quaternion(0, 0, -1, -3.725290298461914e-8),
  scale: new Vector3(1.0101100206375122, 53.44599533081055, 1.0101096630096436)
})
kaitenPe.addComponentOrReplace(transform11)
const gltfShape5 = new GLTFShape("1d623d87-d88a-43dc-b928-e0b70f5cc4bb/kaiten_pe.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
kaitenPe.addComponentOrReplace(gltfShape5)

const videoStream = new Entity('videoStream')
engine.addEntity(videoStream)
videoStream.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(15, 4.5, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
videoStream.addComponentOrReplace(transform12)

const videoStream2 = new Entity('videoStream2')
engine.addEntity(videoStream2)
videoStream2.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(16.13331413269043, 1.9097967147827148, 9.496060371398926),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4.306677341461182, 4.306677341461182, 4.508148670196533)
})
videoStream2.addComponentOrReplace(transform13)

const invisibleCylinder = new Entity('invisibleCylinder')
engine.addEntity(invisibleCylinder)
invisibleCylinder.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(16, 0.45859432220458984, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(21, 0.20999999344348907, 21)
})
invisibleCylinder.addComponentOrReplace(transform14)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
script1.init(options)
script2.init(options)
script3.init(options)
script1.spawn(externalLink, {"url":"https://play.decentraland.org/?island=I36ul&position=-117%2C-35&realm=dg"}, createChannel(channelId, externalLink, channelBus))
script2.spawn(videoStream, {"startOn":"false","onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoStream","actionId":"toggle","values":{}}],"customStation":"https://player.vimeo.com/external/765576164.m3u8?s=0409f88630a5c97b26c306cd88797bebc538634cえ"}, createChannel(channelId, videoStream, channelBus))
script2.spawn(videoStream2, {"startOn":"false","onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoStream2","actionId":"toggle","values":{}}],"customStation":"https://player.vimeo.com/external/765576164.m3u8?s=0409f88630a5c97b26c306cd88797bebc538634c","station":"https://theuniverse.club/live/consensys/index.m3u8"}, createChannel(channelId, videoStream2, channelBus))
script3.spawn(invisibleCylinder, {"enabled":true}, createChannel(channelId, invisibleCylinder, channelBus))