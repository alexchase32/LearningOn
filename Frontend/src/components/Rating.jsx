import { Box, Typography } from "@mui/material";
import { Rating as MuiRating } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledRating = styled(MuiRating)(() => {
    return {
        "& .MuiRating-iconFilled": {
            color: "#ff6d75",
        },
        "& .MuiRating-iconHover": {
            color: "#ff3d47",
        },
    };
});

const Rating = ({ rating }) => {
    console.log(rating);
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                gap: "0.2rem",
            }}
        >
            <Typography variant="h6">
                {rating.rating ? rating.rating : 4.5}
            </Typography>
            <StyledRating
                sx={{
                    padding: 0,
                    verticalAlign: "middle",
                    // paddingTop: "4.5px", //
                    paddingBottom: "2px", // readOnly causes some space on top
                    overflow: "hidden",
                }}
                defaultValue={2.5}
                value={rating.rating ? rating.rating : 4.5}
                precision={0.5}
                size="small"
                readOnly
                // max={1}
            />
            <Typography variant="lightGrey">
                {`(${rating.count ? rating.count : 20})`}
            </Typography>
            {/* <GradeIcon sx={{
            color: theme => theme.palette.rating,
            mr: "0.2rem",
            fontSize: "1.2rem",
            // border: "1px solid red"
        }}/>
        <Box sx={{
            // border: "1px solid red",
            display: "flex",
            alignItems: "center",
            fontSize: "1rem",
            mt: "0.1rem"
        }}>

        <Typography sx={{
            fontWeight: "600",
            fontSize: "inherit",
            m: 0,
            p: 0,
            
        }}>
            {rating.rating}
        </Typography>
        <Typography sx={{
            color: theme => theme.palette.grey.grey400,
            fontSize: "inherit"
        }}>
            &#40;{rating.count}{rating.showText ? " ratings": ""}&#41;
        </Typography>
            </Box> */}
        </Box>
    );
};

export default Rating;
