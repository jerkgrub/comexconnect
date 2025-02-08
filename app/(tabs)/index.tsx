import { Image } from 'react-native';
import {
  H1,
  H2,
  Button,
  XStack,
  YStack,
  Paragraph,
  Card,
  Input,
  Switch,
  ScrollView,
  Dialog
} from 'tamagui';
import { X } from '@tamagui/lucide-icons';
import { useDialog } from '@/contexts/DialogContext';

export default function HomeScreen() {
  const { showDialog } = useDialog();

  const handleOpenDialog = () => {
    showDialog(
      <>
        <Dialog.Portal>
          <Dialog.Overlay
            key="overlay"
            backgroundColor="$shadow6"
            animation="slow"
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
          />

          <Dialog.Content
            bordered
            elevate
            key="content"
            animation="quick"
            enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
            exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
            padding="$4"
            gap="$4"
          >
            <Dialog.Title>Example Dialog</Dialog.Title>
            <Dialog.Description>
              This is a proper Tamagui Dialog component instead of a basic alert.
            </Dialog.Description>

            <XStack alignSelf="flex-end" gap="$4">
              <Dialog.Close asChild>
                <Button theme="active" backgroundColor="$green10">
                  Close
                </Button>
              </Dialog.Close>
            </XStack>

            <Dialog.Close asChild>
              <Button position="absolute" top="$3" right="$3" size="$2" circular icon={X} />
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </>
    );
  };

  return (
    <ScrollView backgroundColor="$background" padding="$4">
      <YStack space="$4">
        <XStack space="$4" alignItems="center">
          <H1 color="$purple10">Tamagui Demo</H1>
          <Image
            source={require('@/assets/images/partial-react-logo.png')}
            style={{ width: 50, height: 30 }}
          />
        </XStack>

        <Card elevate bordered padding="$4" space="$4" backgroundColor="$blue2">
          <H2 color="$blue10">Basic Components</H2>
          <XStack space="$4" alignItems="center">
            <Button backgroundColor="$orange10" onPress={handleOpenDialog}>
              Open Modal
            </Button>
            <Button theme="active" backgroundColor="$green10">
              Active Button
            </Button>
            <Button disabled backgroundColor="$gray8">
              Disabled
            </Button>
          </XStack>
        </Card>

        <Card elevate bordered padding="$4" space="$4" backgroundColor="$pink2">
          <H2 color="$pink10">Form Elements</H2>
          <YStack space="$4">
            <Input placeholder="Type something..." borderColor="$pink8" />
            <XStack space="$4" alignItems="center">
              <Paragraph color="$pink11">Toggle switch:</Paragraph>
              <Switch backgroundColor="$pink8">
                <Switch.Thumb backgroundColor="$pink11" />
              </Switch>
            </XStack>
          </YStack>
        </Card>

        <Card elevate bordered padding="$4" space="$4" backgroundColor="$yellow2">
          <H2 color="$yellow10">Typography</H2>
          <YStack space="$2">
            <H1 color="$orange10">Heading 1</H1>
            <H2 color="$red10">Heading 2</H2>
            <Paragraph size="$6" color="$yellow11">
              Large paragraph text
            </Paragraph>
            <Paragraph color="$yellow12">Normal paragraph text</Paragraph>
            <Paragraph theme="alt1" color="$orange11">
              Alternate theme text
            </Paragraph>
          </YStack>
        </Card>

        <Card elevate bordered padding="$4" space="$4" backgroundColor="$green2">
          <H2 color="$green10">Layout Stack Demo</H2>
          <XStack space="$2" flexWrap="wrap">
            {['$purple10', '$cyan10', '$pink10'].map(color => (
              <YStack
                key={color}
                backgroundColor={color}
                width={80}
                height={80}
                borderRadius="$4"
                alignItems="center"
                justifyContent="center"
              >
                <Paragraph color="white">{color.replace('$', '')}</Paragraph>
              </YStack>
            ))}
          </XStack>
        </Card>
      </YStack>
    </ScrollView>
  );
}
