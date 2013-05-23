/// <reference path="../Game.ts" />
/// <reference path="Polygon.ts" />

/**
* Phaser - Quad
*
* A Quad object is an area defined by its position, as indicated by its top-left corner (x,y) and width and height.
* Very much like a Rectangle only without all of the additional methods and properties of that class.
*/

module Phaser {

    export class Quad {

        /**
        * Creates a new Quad object with the top-left corner specified by the x and y parameters and with the specified width and height parameters. If you call this function without parameters, a rectangle with x, y, width, and height properties set to 0 is created.
        * @class Quad
        * @constructor
        * @param {Number} x The x coordinate of the top-left corner of the quad.
        * @param {Number} y The y coordinate of the top-left corner of the quad.
        * @param {Number} width The width of the quad.
        * @param {Number} height The height of the quad.
        * @return {Quad} This object
        **/
        constructor(x: number = 0, y: number = 0, width: number = 0, height: number = 0) {

            this.setTo(x, y, width, height);

        }

        public x: number;
        public y: number;
        public width: number;
        public height: number;

        /**
        * Sets the Quad to the specified size.
        * @method setTo
        * @param {Number} x The x coordinate of the top-left corner of the quad.
        * @param {Number} y The y coordinate of the top-left corner of the quad.
        * @param {Number} width The width of the quad.
        * @param {Number} height The height of the quad.
        * @return {Quad} This object
        **/
        public setTo(x: number, y: number, width: number, height: number): Quad {

            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;

            return this;

        }

        public get left(): number {
            return this.x;
        }

        public get right(): number {
            return this.x + this.width;
        }

        public get top(): number {
            return this.y;
        }

        public get bottom(): number {
            return this.y + this.height;
        }

        public get halfWidth(): number {
            return this.width / 2;
        }

        public get halfHeight(): number {
            return this.height / 2;
        }

        /**
        * Determines whether the object specified intersects (overlaps) with this Quad object.
        * This method checks the x, y, width, and height properties of the specified Quad object to see if it intersects with this Quad object.
        * @method intersects
        * @param {Object} quad The object to check for intersection with this Quad. Must have left/right/top/bottom properties (Rectangle, Quad).
        * @param {Number} tolerance A tolerance value to allow for an intersection test with padding, default to 0
        * @return {Boolean} A value of true if the specified object intersects with this Quad; otherwise false.
        **/
        public intersects(quad, tolerance?: number = 0): bool {

            return !(quad.left > this.right + tolerance || quad.right < this.left - tolerance || quad.top > this.bottom + tolerance || quad.bottom < this.top - tolerance);

        }

        /**
        * Determines whether the object specified intersects (overlaps) with the given values.
        * @method intersectsProps
        * @param {Number} left 
        * @param {Number} right
        * @param {Number} top
        * @param {Number} bottomt
        * @param {Number} tolerance A tolerance value to allow for an intersection test with padding, default to 0
        * @return {Boolean} A value of true if the specified object intersects with this Quad; otherwise false.
        **/
        public intersectsRaw(left: number, right: number, top: number, bottom: number, tolerance?: number = 0): bool {

            return !(left > this.right + tolerance || right < this.left - tolerance || top > this.bottom + tolerance || bottom < this.top - tolerance);

        }

        /**
        * Determines whether the specified coordinates are contained within the region defined by this Quad object.
        * @method contains
        * @param {Number} x The x coordinate of the point to test.
        * @param {Number} y The y coordinate of the point to test.
        * @return {Boolean} A value of true if the Rectangle object contains the specified point; otherwise false.
        **/
        public contains(x: number, y: number): bool {

            if (x >= this.x && x <= this.right && y >= this.y && y <= this.bottom)
            {
                return true;
            }

            return false;

        }


        /**
        * Copies the x/y/width/height values from the source object into this Quad
        * @method copyFrom
        * @param {Any} source The source object to copy from. Can be a Quad, Rectangle or any object with exposed x/y/width/height properties
        * @return {Quad} This object
        **/
        public copyFrom(source): Quad {

            return this.setTo(source.x, source.y, source.width, source.height);

        }

        /**
        * Copies the x/y/width/height values from this Quad into the given target object
        * @method copyTo
        * @param {Any} target The object to copy this quads values in to. Can be a Quad, Rectangle or any object with exposed x/y/width/height properties
        * @return {Any} The target object
        **/
        public copyTo(target): any {

            return target.copyFrom(this);

        }

        /**
        * Creates and returns a Polygon that is the same as this Quad.
        * @method toPolygon
        * @return {Polygon} A new Polygon that represents this quad.
        **/
        public toPolygon(): Polygon {

            return new Polygon(new Vector2(this.x, this.y), [
                new Vector2(), new Vector2(this.width, 0),
                new Vector2(this.width, this.height), new Vector2(0, this.height)
            ]);

        }

        /**
        * Returns a string representation of this object.
        * @method toString
        * @return {string} a string representation of the object.
        **/
        public toString(): string {

            return "[{Quad (x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + ")}]";

        }

    }

}