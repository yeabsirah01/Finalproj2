import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  createStyles,
  Center,
  Button,
  rem,
} from "@mantine/core";
import {
  IconGasStation,
  IconGauge,
  IconManualGearbox,
  IconUsers,
} from "@tabler/icons-react";
import { useContext } from "react";
import product from "../../product.json";
import { ShopContext } from "../../context/shop-context";

const useStyles = createStyles((theme) => ({
  card: {
    maxWidth: 320,

    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  imageSection: {
    padding: theme.spacing.md,
    display: "flex",
    maxWidth: 320,
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  label: {
    marginBottom: theme.spacing.xs,
    lineHeight: 1,
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    letterSpacing: rem(-0.25),
    textTransform: "uppercase",
  },

  section: {
    padding: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  Images: {
    maxWidth: 320,
  },

  icon: {
    marginRight: rem(5),
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[5],
  },
}));

const mockdata = [
  // { label: "4 passengers", icon: IconUsers },
  // { label: "100 km/h in 4 seconds", icon: IconGauge },
  // { label: "Automatic gearbox", icon: IconManualGearbox },
  // { label: "Electric", icon: IconGasStation },
];

export default function ProdFeaturesCard({ product }) {
  const { addToCart, cartItems } = useContext(ShopContext);
  const { classes } = useStyles();
  const cartItemsAmount = cartItems[product.id];
  const features = mockdata.map((feature) => (
    <Center key={feature.label}>
      <feature.icon size="1.05rem" className={classes.icon} stroke={1.5} />
      <Text size="xs">{feature.label}</Text>
    </Center>
  ));

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Image
          className={classes.Images}
          src={product.image}
          alt="Product item"
          width={320}
          height={332}
        />
      </Card.Section>

      <Group position="apart" mt="md">
        <div>
          <Text fw={500}>{product.name}</Text>
          <Text fz="xs" c="dimmed">
            {/* Free recharge at any station */}
          </Text>
        </div>
        <Badge variant="outline">25% off</Badge>
      </Group>

      <Card.Section className={classes.section} mt="md">
        <Text fz="sm" c="dimmed" className={classes.label}>
          Basic configuration
        </Text>

        <Group spacing={8} mb={-8}>
          {features}
        </Group>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Group spacing={30}>
          <div>
            <Text fz="xl" fw={700} sx={{ lineHeight: 1 }}>
              {product.price} ETB
            </Text>
            <Text fz="sm" c="dimmed" fw={500} sx={{ lineHeight: 1 }} mt={3}>
              per day
            </Text>
          </div>

          <Button
            radius="xl"
            style={{ flex: 1 }}
            onClick={() => addToCart(product.id)}
          >
            Add to Cart {cartItemsAmount > 0 && <> ({cartItemsAmount})</>}
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
}
