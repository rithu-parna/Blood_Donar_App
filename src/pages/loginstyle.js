import bgImage from '../assets/login-bg.png';
import loginCardImg from '../assets/login-card-img.png';

export const loginStyles = {
    pageContainer: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
        position: 'relative',
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.2)), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    crmdashbdcard: {
        bgcolor: 'rgba(255, 255, 255, 0.3)',
        backdropFilter: 'blur(25px)',
        borderRadius: "48px",
        position: 'relative',
        display: 'flex',
        width: '100%',
        boxShadow: '0 40px 80px rgba(0, 0, 0, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.4)',
        minHeight: 650,
        overflow: 'hidden'
    },
    leftSide: {
        flex: 1,
        p: { xs: 4, md: 8 },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        zIndex: 1
    },
    title: {
        color: '#1E293B',
        mb: 1,
        letterSpacing: -1,
        fontWeight: 900
    },
    titleHighlight: {
        color: '#E11D48'
    },
    subtitle: {
        mb: 4,
        fontWeight: 500,
        lineHeight: 1.6,
        color: "#64748B"
    },
    formLabel: {
        fontWeight: 900,
        mb: 1,
        color: '#0F172A',
        fontSize: '0.85rem'
    },
    inputField: {
        mb: 3,
        '& .MuiOutlinedInput-root': {
            borderRadius: "16px",
            bgcolor: '#F8FAFC',
            transition: 'all 0.3s ease',
            '&:hover': { bgcolor: '#F1F5F9' },
            '&.Mui-focused': { bgcolor: '#fff', boxShadow: '0 0 0 4px rgba(225, 29, 72, 0.1)' }
        }
    },
    passwordField: {
        mb: 1.5,
        '& .MuiOutlinedInput-root': {
            borderRadius: "16px",
            bgcolor: '#F8FAFC',
            transition: 'all 0.3s ease',
            '&:hover': { bgcolor: '#F1F5F9' },
            '&.Mui-focused': { bgcolor: '#fff', boxShadow: '0 0 0 4px rgba(225, 29, 72, 0.1)' }
        }
    },
    forgotPasswordContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        mb: 4
    },
    forgotPasswordLink: {
        color: '#E11D48',
        fontSize: '13px',
        fontWeight: 950,
        '&:hover': { textDecoration: 'underline' }
    },
    signInButton: {
        bgcolor: '#E11D48',
        color: 'white',
        py: 2,
        borderRadius: "16px",
        fontWeight: 950,
        fontSize: '1rem',
        mb: 4,
        boxShadow: '0 10px 20px -5px rgba(225, 29, 72, 0.4)',
        textTransform: 'none',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        '&:hover': {
            bgcolor: '#BE123C',
            transform: 'translateY(-2px)',
            boxShadow: '0 15px 30px -5px rgba(225, 29, 72, 0.5)'
        }
    },
    divider: {
        mb: 4,
        fontSize: '13px',
        color: '#94a3b8',
        fontWeight: 700
    },
    socialButton: {
        borderRadius: "16px",
        borderColor: '#E2E8F0',
        color: '#475569',
        textTransform: 'none',
        fontWeight: 900,
        bgcolor: '#fff',
        py: 1.5,
        transition: '0.3s',
        '&:hover': { bgcolor: '#F8FAFC', borderColor: '#CBD5E1', transform: 'translateY(-1px)' }
    },
    footerText: {
        mt: 5,
        textAlign: 'center'
    },
    registerLink: {
        color: '#E11D48',
        fontWeight: 900,
        cursor: 'pointer',
        ml: 1
    },
    rightSideArea: {
        flex: 1,
        display: { xs: 'none', md: 'block' },
        p: 0,
        position: 'relative'
    },
    rightSideImage: {
        width: '100%',
        height: '100%',
        borderRadius: 0,
        backgroundImage: `url(${loginCardImg})`,
        backgroundSize: 'cover',
        opacity: 1,
        backgroundPosition: 'center',
        position: 'relative'
    },
    rightSideOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bgcolor: 'rgba(225, 29, 72, 0.15)',
        borderRadius: 0
    },
    quoteBox: {
        position: 'absolute',
        bottom: 40,
        left: 40,
        right: 40,
        bgcolor: 'rgba(255,255,255,0.1)',
        backdropFilter: 'blur(10px)',
        p: 4,
        borderRadius: 5,
        border: '1px solid rgba(255,255,255,0.2)'
    },
    quoteTitle: {
        fontWeight: 900,
        color: "white",
        mb: 1
    },
    quoteBody: {
        color: "rgba(255,255,255,0.9)",
        fontWeight: 500,
        lineHeight: 1.6
    },
    quoteAuthor: {
        color: 'white',
        display: 'block',
        mt: 2,
        fontWeight: 800
    }
};
