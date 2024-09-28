
import { hex2rgb, deg2rad } from './js/utils/utils.js'

/**
 * @Class
 * Base class for all drawable shapes
 * 
 */
class Shape
{
    /**
     * 
     * @param {WebGL2RenderingContext} gl The webgl2 rendering context
     * @param {Shader} shader The shader to be used to draw the object
     * @param {Array<Float>} vertices List of vertex positions
     * @param {Array<Int>} indices List of vertex indices
     * @param {Array<Float>} color Color as a three-element vector
     * @param {WebGL2RenderingContext.GL_TRIANGLES | WebGL2RenderingContext.GL_POINTS} draw_mode The draw mode to use. In this assignment we use GL_TRIANGLES and GL_POINTS
     * @param {Number} num_elements The number of elements that make up one primitive in the given draw mode
     */
    constructor( gl, shader, vertices, indices, color, draw_mode, num_elements )
    {
        this.shader = shader

        this.vertices = vertices
        this.vertices_buffer = null
        this.createVBO( gl )

        this.indices = indices
        this.index_buffer = null
        this.createIBO( gl )

        this.color = color

        this.draw_mode = draw_mode

        this.num_components = 2
        this.num_elements = num_elements

        this.vertex_array_object = null
        this.createVAO( gl, shader )
    }

    /**
     * Sets up a vertex attribute object that is used during rendering to automatically tell WebGL how to access our buffers
     * @param { WebGL2RenderingContext } gl The webgl2 rendering context
     */
    createVAO( gl, shader )
    {
        throw '"Shape.createVAO" not implemented'
        const canvas = document.getElementById('canvas');
        gl = canvas.getContext('webgl');

        // TODO: Create a vertex attribute object (VAO) and store it in 'this.vertex_array_object'
        const vao = gl.createVertexArray();
        this.vertex_array_object = vao;
        // TODO: Bind the VBO and link it to the shader attribute 'a_position'
        
        // TODO: Set the correct vertex attrib pointer settings for your VBO, so that the vertex data is mapped correctly to 'a_position'
        // TODO: Unbind buffers and clean up
    }

    /**
     * Creates vertex buffer object for vertex data
     * @param { WebGL2RenderingContext } gl The webgl2 rendering context
     */
    createVBO( gl )
    {
        throw '"Shape.createVBO" not implemented'

        // TODO: Create a vertex buffer (VBO) and store it in 'this.vertices_buffer'
        // TODO: Fill the buffer with data in 'this.vertices'
        // TODO: Pay attention to the data type of the buffer and refer to the book
    }

    /**
     * Creates index buffer object for vertex data
     * @param { WebGL2RenderingContext } gl The webgl2 rendering context
     */
    createIBO( gl )
    {
        throw '"Shape.createIBO" not implemented'

        // TODO: Create an index buffer object (IBO) and store it in 'this.index_buffer'
        // TODO: Fill the buffer with data in 'this.indices' 
        // TODO: Pay attention to the datatype of the buffer and refer to the book
    }

    /**
     * Render call for an individual shape.
     * 
     * In this function, you set both the vertex and index buffers active
     * After that you want to set the color uniform "u_color" in the shader, so that it knows which color to use
     * "u_color" is a vec3 i.e. a list of 3 floats
     * Finally, you draw the geometry
     * Don't forget to unbind the buffers after that
     * 
     * @param { WebGL2RenderingContext } gl The webgl2 rendering context
     */
    render( gl )
    {
        throw '"Shape.render" not implemented'

        // TODO: Bind vertex array object
        // TODO: Bind index buffer
        // TODO: Send uniform attributes for the shape's color using 'this.shader' and its function 'setUniform3f'
        // TODO: The color is stored in 'this.color' and needs to be passed to the uniform named 'u_color' in the shader
        // TODO: Draw the element
        // TODO: Clean Up
    }

}

/**
 * @Class
 * Triangle extension for Shape. Creates vertex list and indices and calls the super constructor.
 */
class Triangle extends Shape
{

    constructor( gl, shader, position, color, sideLength) 
    {
        throw '"Triangle" constructor not implemented'

        // You will need those angles to define your triangle vertices
        let cosangle = Math.cos(deg2rad(30))
        let sinangle = Math.sin(deg2rad(30))

        // TODO: Create a list of vertices defining the triangle
        let vertices = [
            // Side1
            // Side2 
            // Side3
        ]

        // TODO: Create a list of indices referencing the triangle vertices in order
        let indices = [
            // Triangle indices
        ]

        // TODO: Check out the 'Shape' class and understand what the constructor does
        super( gl, shader, vertices, indices, color, gl.TRIANGLES, indices.length )

    }

}

/**
 * @Class
 * WebGlApp that will call basic GL functions, manage a list of shapes, and take care of rendering them
 * 
 * This class will use the Shapes that you have implemented to store and render them
 */
class WebGlApp 
{
    /**
     * Initializes an empty list of shapes. Use this to store shapes.
     */
    constructor()
    {
        this.shapes = [ ]
    }

    /**
     * Initializes webgl2 with settings
     * @returns { WebGL2RenderingContext | null } The WebGL2 context or Null
     */
    initGl( )
    {
        throw '"WebGLApp.initGL" not implemented'

        // TODO: Get the canvas element and retrieve its webgl2 context 
        // TODO: Return the context
    }

    /**
     * Sets the viewport of the canvas to fill the whole available space so we draw to the whole canvas
     * 
     * @param {WebGL2RenderingContext} gl The webgl2 rendering context
     * @param {Number} width 
     * @param {Number} height 
     */
    setViewport( gl, width, height )
    {
        throw '"WebGLApp.setViewport" not implemented'

        // TODO: Set the GL viewport to fill the full width and height of the canvas
    }

    /**
     * Clears the canvas color with Aggie Blue
     * 
     * @param {WebGL2RenderingContext} gl The webgl2 rendering context
     */
    clearCanvas( gl )
    {
        throw '"WebGlApp.clearCanvas" not implemented'

        // TODO: Clear the canvas with Aggie Blue (#022851) 
        // TODO: Check out the helper function 'hex2rgb'
    }

    /**
     * Adds a triangle shape to the list of shapes
     * 
     * @param {WebGL2RenderingContext} gl The webgl2 rendering context
     * @param {Shader} shader The shader to be used to draw the object
     * @param {Array<Number>} position The position of the point as a two-element array
     * @param {Number} sideLength The length of the triangle sides
     */
    addTriangle( gl, shader, position, sideLength )
    {
        throw '"WebGlApp.addTriangle" not implemented'

        // TODO: Add a new Triangle shape to the list of shapes
        // TODO: Use the 'Triangle' class defined above
        // TODO: Make the color Aggie Gold (#FFBF00) or any color that contrasts nicely with Aggie Blue (#022851)
    }

    /**
     * Clears the list of shapes. After this call the canvas will be empty.
     */
    clearShapes()
    {
        this.shapes = [ ]
    }

    /**
     * Main render loop which sets up the active viewport (i.e. the area of the canvas we draw to)
     * clears the canvas with a background color and draws all active shapes
     * 
     * If there's no shapes, only the background will be drawn
     * 
     * @param {WebGL2RenderingContext} gl The webgl2 rendering context
     * @param {Number} canvas_width The canvas width. Needed to set the viewport
     * @param {Number} canvas_height The canvas height. Needed to set the viewport
     */
    render( gl, canvas_width, canvas_height )
    {
        throw '"WebGlApp.render" not implemented'

        // TODO: Set the viewport to span the full 'canvas_width' and 'canvas_height' using the function you implemented above
        // TODO: Clear the active viewport with Aggie Blue using the function you implemented above
        // TODO: Loop through all shapes and render them using the Shape's render function
    }

}


// JS Module Export -- No need to modify this
export
{
    Triangle,
    WebGlApp
}
