import React from 'react'
import Box from '../../components/box'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormInput from '../../components/forminput'
import Text from '../../components/text'
import Button from '../../components/button'
import { Close, Folder, Check, Down, Plus, Right } from '../../components/icons'
import theme from '../../utils/theme'
import { FolderItemData } from '../../data/folderItemData'
import TreeView from 'react-native-animated-tree-view'

function Detail() {
  const [valueTitle, setValueTitle] = React.useState('')
  const [valueLink, setValueLink] = React.useState('')

  return (
    <Box as={SafeAreaView} flex={1} bg="light" p={16}>
      <Box py={8}>
        <Text fontSize={16} py={8}>
          Başlık
        </Text>
        <Box>
          <FormInput
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              shadowColor: '#000',
              shadowOpacity: 0.1,
              shadowRadius: 24,
              shadowOffset: {
                width: 0,
                height: 4
              }
            }}
            onChangeText={(text) => setValueTitle(text)}
            value={valueTitle}
            placeholderText="Link başlığını gir.."
            onSubmitEditing={() => {
              this.secondTextInput.focus()
            }}
            blurOnSubmit={false}
          />
          {valueTitle.length > 0 && (
            <Button
              onPress={() => setValueTitle('')}
              position="absolute"
              top={12}
              right={16}
            >
              <Close color={theme.colors.textDark} />
            </Button>
          )}
        </Box>
      </Box>

      <Box py={4}>
        <Text fontSize={16} py={8}>
          Link
        </Text>
        <Box>
          <FormInput
            ref={(input) => {
              this.secondTextInput = input
            }}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              shadowColor: '#000',
              shadowOpacity: 0.1,
              shadowRadius: 24,
              shadowOffset: {
                width: 0,
                height: 4
              }
            }}
            placeholderText="Link gir.."
            value={valueLink}
            onChangeText={(text) => setValueLink(text)}
          />
          {valueLink.length > 0 && (
            <Button
              onPress={() => setValueLink('')}
              position="absolute"
              right={16}
              top={12}
            >
              <Close color={theme.colors.textDark} />
            </Button>
          )}
        </Box>
      </Box>
      <Box>
        <Text fontSize={16} py={8}>
          Klasör
        </Text>
        <TreeView
          data={FolderItemData}
          onClick={(e) => {}}
          leftImage={<Folder color={theme.colors.textLight} />}
          leftActiveImage={<Folder color={theme.colors.red} />}
          rightActiveIcon={<Check color={theme.colors.red} />}
          rightIcon={<Down color={theme.colors.textLight} />}
        />
        <Box
          bg="white"
          p={8}
          borderTopWidth={1}
          borderTopColor={theme.colors.textLight}
          borderBottomLeftRadius={8}
          borderBottomRightRadius={8}
        >
          <Button>
            <Plus />
            <Text fontSize={16} ml={8} flex={1}>
              Yeni Klasör
            </Text>
            <Right />
          </Button>
        </Box>
      </Box>
      <Box
        my={16}
        bg="red"
        height={48}
        justifyContent="center"
        alignItems="center"
        borderRadius={8}
      >
        <Button height="100%" width="100%">
          <Text color="white" fontSize={18}>
            Ekle
          </Text>
        </Button>
      </Box>
    </Box>
  )
}

export default Detail
