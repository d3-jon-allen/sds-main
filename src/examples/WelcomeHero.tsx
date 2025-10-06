import { useMediaQuery } from "hooks";
import { Flex, Section } from "layout";
import { Button, Form, Input, TextContentTitle } from "primitives";

export function WelcomeHero() {
  const { isMobile } = useMediaQuery();
  const sectionPadding = isMobile ? "600" : "1600";
  const flexGap = isMobile ? "600" : "1200";

  return (
    <Section padding={sectionPadding} variant="stroke">
      <Flex
        container
        wrap
        gap={flexGap}
        direction="column"
        alignPrimary="center"
        alignSecondary="center"
        type="third"
      >
        <TextContentTitle
          align="center"
          title="Welcome Home"
          subtitle={<>We're happy to have&nbsp;you.</>}
        />
        <Form singleLine>
          <Input aria-label="Email address" placeholder="you@example.com" />
          <Button onPress={() => {}} variant="neutral">
            Get updates
          </Button>
        </Form>
        <Button onPress={() => {}} variant="primary">
          Try it now
        </Button>
        <Flex direction="column" gap={flexGap} alignSecondary="center">
          <Flex gap="600" alignSecondary="center">
            <Button size="medium" variant="primary" onPress={() => {}}>
              Primary Button M
            </Button>
            <Button size="medium" variant="neutral" onPress={() => {}}>
              Neutral Button M
            </Button>
            <Button size="medium" variant="subtle" onPress={() => {}}>
              Subtle Button M
            </Button>
          </Flex>
          <Flex gap="600" alignSecondary="center">
            <Button size="small" variant="primary" onPress={() => {}}>
              Primary Button S
            </Button>
            <Button size="small" variant="neutral" onPress={() => {}}>
              Neutral Button S
            </Button>
            <Button size="small" variant="subtle" onPress={() => {}}>
              Subtle Button S
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Section>
  );
}
