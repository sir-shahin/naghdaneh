import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { Search } from "@/components/home";
import MainContainer from "@/components/MainContainer";
import bg from "@/assets/images/mountain.jpg";

export default function Home() {
  return (
    <MainContainer sx={{ backgroundImage: `url(${bg.src})`, backgroundSize: "cover" }}>
      <Container sx={{ display: "flex", flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Stack textAlign="center">
          <Typography gutterBottom variant="h4" fontWeight="bold" component="h1">
            نقدانه: همه چیز زیر ذره بین شما
          </Typography>
          <Typography component="h2" maxWidth={420} mx={"auto"} mb={5}>
            به جامعه ی بزرگی از علاقه مندان بپیوندید. هر آنچه می خواهید را نقد کنید، کشف کنید و بخوانید
          </Typography>
          {/* search component in home */}
          <Search />
        </Stack>
      </Container>
    </MainContainer>
  );
}
