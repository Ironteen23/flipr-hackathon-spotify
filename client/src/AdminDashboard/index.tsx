import { useRef, useState } from "react"
import {
  Text,
  Group,
  Button,
  createStyles,
  rem,
  Grid,
  Title,
} from "@mantine/core"
import { Dropzone } from "@mantine/dropzone"
import { IconCloudUpload, IconX, IconDownload } from "@tabler/icons-react"
import PreviousUploads from "./PreviousUploads"
import DescriptionForm from "./DescriptionForm"
import { StatsGroup } from "./FileInfo"

const useStyles = createStyles(theme => ({
  wrapper: {
    position: "relative",
    marginTop: rem(30),
    marginBottom: rem(30),
  },

  dropzone: {
    borderWidth: rem(1),
    paddingBottom: rem(50),
  },

  icon: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[3]
        : theme.colors.gray[4],
  },

  control: {
    position: "absolute",
    width: rem(250),
    left: `calc(50% - ${rem(125)})`,
    bottom: rem(-20),
  },
}))

const AdminDashboard = () => {
  const [files, setFiles] = useState<File[]>([])

  const handleDrop = (files: File[]) => {
    console.log(files)

    setFiles(files)
  }

  function DropSection() {
    const { classes, theme } = useStyles()
    const openRef = useRef<() => void>(null)

    return (
      <div className={classes.wrapper}>
        <Dropzone
          openRef={openRef}
          onDrop={handleDrop}
          className={classes.dropzone}
          radius="md"
          accept={["audio/*", "video/*", "image/*"]}
          maxSize={30 * 1024 ** 2}
        >
          <div style={{ pointerEvents: "none" }}>
            <Group position="center">
              <Dropzone.Accept>
                <IconDownload
                  size={rem(50)}
                  color={theme.colors[theme.primaryColor][6]}
                  stroke={1.5}
                />
              </Dropzone.Accept>
              <Dropzone.Reject>
                <IconX
                  size={rem(50)}
                  color={theme.colors.red[6]}
                  stroke={1.5}
                />
              </Dropzone.Reject>
              <Dropzone.Idle>
                <IconCloudUpload
                  size={rem(50)}
                  color={
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[0]
                      : theme.black
                  }
                  stroke={1.5}
                />
              </Dropzone.Idle>
            </Group>

            <Text ta="center" fw={700} fz="lg" mt="xl">
              <Dropzone.Accept>Drop files here</Dropzone.Accept>
              <Dropzone.Reject>
                Uploaded file must be less than 30mb
              </Dropzone.Reject>
              <Dropzone.Idle>Upload podcast</Dropzone.Idle>
            </Text>
            <Text ta="center" fz="sm" mt="xs" c="dimmed">
              Drag&apos;n&apos;drop files here to upload.
            </Text>
          </div>
        </Dropzone>

        <Button
          className={classes.control}
          size="md"
          onClick={() => openRef.current?.()}
        >
          Select files
        </Button>
      </div>
    )
  }

  return (
    <Grid p="md">
      <Grid.Col span={7}>
        <Title>
          Previous <span style={{ color: "gray" }}>Uploads</span>
        </Title>

        <PreviousUploads />

        <DropSection />
      </Grid.Col>

      <Grid.Col span={5}>
        {files.length > 0 && (
          <>
            <Title>
              Upload <span style={{ color: "gray" }}>Info</span>
            </Title>
            <StatsGroup
              title={files[0].name}
              size={files[0].size}
              file_type={files[0].type}
            />

            <DescriptionForm />
          </>
        )}
      </Grid.Col>
    </Grid>
  )
}

export default AdminDashboard
