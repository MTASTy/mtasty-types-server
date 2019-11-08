/// <reference path="./class/acl/acl-group.d.ts" />
/// <reference path="./class/acl/acl.d.ts" />

/// <reference path="./class/colshape/colshape.d.ts" />
/// <reference path="./class/colshape/colshape-circle.d.ts" />
/// <reference path="./class/colshape/colshape-cuboid.d.ts" />
/// <reference path="./class/colshape/colshape-polygon.d.ts" />
/// <reference path="./class/colshape/colshape-rectangle.d.ts" />
/// <reference path="./class/colshape/colshape-sphere.d.ts" />
/// <reference path="./class/colshape/colshape-tube.d.ts" />

/// <reference path="./class/element/base-element.d.ts" />
/// <reference path="./class/element/element.d.ts" />

/// <reference path="./class/text/text-display.d.ts" />
/// <reference path="./class/text/text-item.d.ts" />

/// <reference path="./class/oop/matrix.d.ts" />
/// <reference path="./class/oop/vector2.d.ts" />
/// <reference path="./class/oop/vector3.d.ts" />
/// <reference path="./class/oop/vector4.d.ts" />

/// <reference path="./class/account.d.ts" />
/// <reference path="./class/ban.d.ts" />
/// <reference path="./class/blip.d.ts" />
/// <reference path="./class/connection.d.ts" />
/// <reference path="./class/file.d.ts" />
/// <reference path="./class/marker.d.ts" />
/// <reference path="./class/object.d.ts" />
/// <reference path="./class/ped.d.ts" />
/// <reference path="./class/pickup.d.ts" />
/// <reference path="./class/player.d.ts" />
/// <reference path="./class/query-handle.d.ts" />
/// <reference path="./class/radararea.d.ts" />
/// <reference path="./class/request.d.ts" />
/// <reference path="./class/resource.d.ts" />
/// <reference path="./class/team.d.ts" />
/// <reference path="./class/text/text-display.d.ts" />
/// <reference path="./class/text/text-item.d.ts" />
/// <reference path="./class/timer.d.ts" />
/// <reference path="./class/vehicle.d.ts" />
/// <reference path="./class/water.d.ts" />
/// <reference path="./class/xml.d.ts" />

/// <reference path="./function/account.d.ts" />
/// <reference path="./function/acl.d.ts" />
/// <reference path="./function/admin.d.ts" />
/// <reference path="./function/announcement.d.ts" />
/// <reference path="./function/audio.d.ts" />
/// <reference path="./function/blip.d.ts" />
/// <reference path="./function/camera.d.ts" />
/// <reference path="./function/clothes-and-body.d.ts" />
/// <reference path="./function/colshape.d.ts" />
/// <reference path="./function/cursor.d.ts" />
/// <reference path="./function/element.d.ts" />
/// <reference path="./function/event.d.ts" />
/// <reference path="./function/explosion.d.ts" />
/// <reference path="./function/file.d.ts" />
/// <reference path="./function/input.d.ts" />
/// <reference path="./function/map.d.ts" />
/// <reference path="./function/marker.d.ts" />
/// <reference path="./function/module.d.ts" />
/// <reference path="./function/object.d.ts" />
/// <reference path="./function/output.d.ts" />
/// <reference path="./function/ped.d.ts" />
/// <reference path="./function/pickup.d.ts" />
/// <reference path="./function/player.d.ts" />
/// <reference path="./function/projectile.d.ts" />
/// <reference path="./function/radar-area.d.ts" />
/// <reference path="./function/resource.d.ts" />
/// <reference path="./function/server.d.ts" />
/// <reference path="./function/settings-registry.d.ts" />
/// <reference path="./function/sql.d.ts" />
/// <reference path="./function/team.d.ts" />
/// <reference path="./function/text.d.ts" />
/// <reference path="./function/utf8.d.ts" />
/// <reference path="./function/utility.d.ts" />
/// <reference path="./function/vehicle.d.ts" />
/// <reference path="./function/water.d.ts" />
/// <reference path="./function/weapon.d.ts" />
/// <reference path="./function/world.d.ts" />

// Global Lua namespace
declare const _G: any;

// Resource element of the resource the snippet was executed in
declare const resource: Resource;

// Resource root element of the resource the snippet was executed in
declare const resourceRoot: BaseElement;

// The root element of the server
declare const root: BaseElement;

// The player or element the event was attached to
declare const source: BaseElement;

// The name of the event ("onResourceStart", "onPlayerWasted" etc.)
declare const eventName: string;

// The client that called the event
declare const client: Player;

// The root of the resource that called the event
declare const sourceResourceRoot: BaseElement;

// The resource that called the event
declare const sourceResource: Resource;

// Current timer in callback function
declare const sourceTimer: Timer;
