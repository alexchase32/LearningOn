import FlexBetween from "../../components/FlexBetween.jsx";

import { Box, useMediaQuery, Typography } from "@mui/material";
import { StyledButton } from "../../components/StyledButton.jsx";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import useTheme from "@mui/material/styles/useTheme";
import DashboardIcon from '@mui/icons-material/Dashboard';

const LandingView = () => {
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();
    const theme = useTheme();

    const showDashboard = () => {
        return (
            user &&
            (user.courses.length > 0 ||
                user.tutoring.length > 0 ||
                user.blogs.length > 0)
        );
    };

    return (
        <Box
            sx={{
                mt: isNonMobileScreens ? "0rem" : "0",
                backgroundColor: "white",
                padding: isNonMobileScreens ? "4rem 5rem" : "2rem",
            }}
        >
            <FlexBetween
                sx={{
                    width: "100%",
                    flexDirection: isNonMobileScreens ? "row" : "column",
                }}
            >
                <Box
                    sx={{
                        mt: isNonMobileScreens ? "0" : "5rem",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: isNonMobileScreens
                            ? "flex-start"
                            : "center",
                        gap: isNonMobileScreens ? "2rem" : "1rem",
                        width: isNonMobileScreens ? "40%" : "100%",
                        pb: "3rem",
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: "600",
                            fontSize: isNonMobileScreens ? "2rem" : "1.5rem",
                        }}
                    >
                        LearningOn
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            mb: "1.5rem",
                            textAlign: isNonMobileScreens ? "left" : "center",
                            fontSize: isNonMobileScreens ? "1.7rem" : "1.3rem",
                        }}
                    >
                        Learning made easy with courses, blogs & personal tutors
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: isNonMobileScreens
                                ? "flex-start"
                                : "center",
                            gap: "1.5rem",
                            mt: isNonMobileScreens
                                ? user
                                    ? "2rem"
                                    : "0"
                                : "0",
                        }}
                    >
                        <StyledButton
                            onClick={() => {
                                if (user) {
                                    navigate("/publishcourse");
                                    return;
                                }
                                navigate("/signup", {
                                    state: { isLogin: false },
                                });
                            }}
                            sx={{
                                "&&": {
                                    padding: isNonMobileScreens
                                        ? "0.5rem 2rem"
                                        : "0.4rem 1.5rem",
                                    borderRadius: "2rem",
                                },
                            }}
                        >
                            <Typography variant="h4">
                                {user
                                    ? "Publish a Course"
                                    : isNonMobileScreens
                                    ? "Get Started"
                                    : "Sign Up"}
                            </Typography>
                        </StyledButton>
                        {user && (
                            <FlexBetween
                                sx={{
                                    gap: "1.5rem",
                                    flexWrap: "wrap",
                                    "&&": {
                                        flexDirection: isNonMobileScreens
                                            ? "row"
                                            : "column",
                                        alignItems: isNonMobileScreens
                                            ? "flex-start"
                                            : "center",
                                    },
                                }}
                            >
                                <StyledButton
                                    onClick={() => {
                                        navigate("/signup", {
                                            state: { isLogin: false },
                                        });
                                    }}
                                    sx={{
                                        "&&": {
                                            padding: isNonMobileScreens
                                                ? "0.5rem 2rem"
                                                : "0.4rem 1.5rem",
                                            borderRadius: "2rem",
                                            backgroundColor: (theme) =>
                                                theme.palette.background
                                                    .buttonBgPink,
                                            "&:hover": {
                                                backgroundColor: (theme) =>
                                                    theme.palette.background
                                                        .buttonBgPinkDark,
                                            },
                                        },
                                    }}
                                >
                                    <Typography variant="h4">
                                        Start Tutoring
                                    </Typography>
                                </StyledButton>
                                <StyledButton
                                    onClick={() => {
                                        navigate("/signup", {
                                            state: { isLogin: false },
                                        });
                                    }}
                                    sx={{
                                        "&&": {
                                            padding: isNonMobileScreens
                                                ? "0.5rem 2rem"
                                                : "0.4rem 1.5rem",
                                            borderRadius: "2rem",
                                            backgroundColor: (theme) =>
                                                theme.palette.background
                                                    .buttonBgLightPink,
                                            "&:hover": {
                                                backgroundColor: (theme) =>
                                                    theme.palette.background
                                                        .buttonBgLightPinkDark,
                                            },
                                        },
                                    }}
                                >
                                    <Typography variant="h4">
                                        Browse Blogs
                                    </Typography>
                                </StyledButton>
                            </FlexBetween>
                        )}
                    </Box>
                </Box>
                <Box
                    sx={{
                        textAlign: "center",
                        width: isNonMobileScreens ? "50%" : "90%",
                        mt: isNonMobileScreens ? "0" : "3rem",
                        overflow: "hidden",
                    }}
                >
                    <img
                        className="landing-page-img"
                        src="images/landing_page.svg"
                        alt="landing-page-img"
                        width="100%"
                        height="auto"
                        loading="lazy"
                        style={{
                            maxHeight: "100%",
                        }}
                    />
                </Box>
            </FlexBetween>
            {showDashboard() && (
                <Button
                    sx={{
                        borderRadius: "0.25rem",
                        border: "1px solid " + theme.palette.primary.darker,
                        padding: "0.5rem 1rem",
                        color: (theme) => theme.palette.primary.darker,

                        "&:hover": {
                            backgroundColor: (theme) =>
                                theme.palette.primary.light3,
                        },
                    }}
                    onClick={() => {
                        navigate("/dashboard");
                    }}
                >
                    <DashboardIcon
                        sx={{
                            mr: "0.5rem",
                        }}
                    />
                    <Typography sx={{}} variant="h6">
                        Open Dashboard
                    </Typography>
                </Button>
            )}
        </Box>
    );
};

export default LandingView;
