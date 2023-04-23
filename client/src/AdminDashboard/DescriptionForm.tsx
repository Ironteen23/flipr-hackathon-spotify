import {
  TextInput,
  Textarea,
  SimpleGrid,
  Group,
  Button,
} from "@mantine/core"
import { useForm } from "@mantine/form"

export default function DescriptionForm() {
  const form = useForm({
    initialValues: {
      title: "",
      author: "",
      description: "",
    },
    validate: {
      title: value => value.trim().length < 2,
      author: value => value.trim().length < 2,
      description: value => value.trim().length === 0,
    },
  })

  return (
    <form onSubmit={form.onSubmit(() => {})}>
      <SimpleGrid cols={2} mt="xl" breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
        <TextInput
          label="Title"
          placeholder="43: The Why of Programming"
          title="title"
          variant="filled"
          {...form.getInputProps("title")}
        />
        <TextInput
          label="Author"
          placeholder="Marques Brownlee"
          title="author"
          variant="filled"
          {...form.getInputProps("author")}
        />
      </SimpleGrid>

      <Textarea
        mt="md"
        label="Description"
        placeholder="Conversations with developers, web professionals, engineers, designers, strategists, CEOs, entrepreneurs, and all the other wonderful people who make the web every day, while having a drink or ten. Every episode features a different guest, a topic close to their heart and their favorite drink."
        maxRows={10}
        minRows={5}
        autosize
        title="message"
        variant="filled"
        {...form.getInputProps("description")}
      />

      <Group position="center" mt="xl">
        <Button type="submit" size="md" fullWidth>
          Upload
        </Button>
      </Group>
    </form>
  )
}
