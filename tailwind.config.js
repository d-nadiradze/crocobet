module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
    ],
    theme: {
        extend: {
            backgroundColor: {
                customBlue:{
                    DEFAULT: '#2A84FF'
                }
            },
            colors:{
                customBlue:{
                    DEFAULT: '#2A84FF'
                }
            },
            keyframes: {
                appear: {
                    '0%': {opacity: '0'},
                    '100%': {opacity: '100%',},
                },
                slide:{
                    '0%': {top: '-400px'},
                    '100%': {top: '-0'},
                },
                dissepear: {
                    '0%': { opacity: '100%' },
                    '100%': { opacity: '0' },
                }
            },
            animation: {
                appear: 'appear 0.5s ease-in-out',
                dissepear: 'dissepear 0.5s ease-in-out',
                slide: 'slide 0.6s ease-in-out'
            }
        },
    },
    plugins: [],
}
