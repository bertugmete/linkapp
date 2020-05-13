import React from 'react'
import Box from '../../components/box'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormInput from '../../components/forminput'
import Text from '../../components/text'
import Button from '../../components/button'
import { Close, Folder, Check, Down, Plus } from '../../components/icons'
import theme from '../../utils/theme'
import NestedListView, { NestedRow } from 'react-native-nested-listview'
import { FolderItemData } from '../../data/folderItemData'

function AddFolder({ navigation }) {
  const [folderName, setFolderName] = React.useState('')
  const [activeNode, setActiveNode] = React.useState('')

  return (
    <Box as={SafeAreaView} flex={1} bg="light" p={16}>
      <Box py={8}>
        <Text fontSize={16} py={8}>
          Klasör Adı
        </Text>
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
          onChangeText={(text) => setFolderName(text)}
          value={folderName}
          onSubmitEditing={() => {
            this.secondTextInput.focus()
          }}
          blurOnSubmit={false}
        />
      </Box>
      <Box>
        <Text fontSize={16} py={8}>
          Konum
        </Text>
        <Box bg="white" p={8} borderRadius={8}>
          <NestedListView
            data={FolderItemData}
            getChildrenName={(node) => 'items'}
            onNodePressed={(node) => setActiveNode(node.title)}
            renderNode={(node, level) => {
              let isActive = node.title === activeNode

              if (isActive) {
                return (
                  <NestedRow level={level} style={styles.active}>
                    <Folder color="blue" />
                    <Box
                      flex={1}
                      ml={8}
                      height="100%"
                      flexDirection="row"
                      borderBottomWidth={1}
                      borderColor={theme.colors.textLight}
                      alignItems="center"
                    >
                      <Text fontSize={16} color="blue" flex={1}>
                        {node.title}
                      </Text>
                      <Check color="blue" />
                    </Box>
                  </NestedRow>
                )
              } else {
                return (
                  <NestedRow level={level} style={styles.passive}>
                    <Folder color={theme.colors.textLight} />
                    <Box
                      height="100%"
                      flex={1}
                      ml={8}
                      flexDirection="row"
                      borderBottomWidth={1}
                      borderColor={theme.colors.textLight}
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Text fontSize={16} flex={1}>
                        {node.title}
                      </Text>
                      {node.items && <Down color={theme.colors.textLight} />}
                    </Box>
                  </NestedRow>
                )
              }
            }}
          />
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
        <Button
          height="100%"
          width="100%"
          onPress={() => navigation.navigate('Detail')}
        >
          <Text color="white" fontSize={18}>
            Ekle
          </Text>
        </Button>
      </Box>
    </Box>
  )
}

const styles = {
  active: {
    fontSize: 20,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 4,
    paddingBottom: 4,
    height: 40
  },
  passive: {
    fontSize: 20,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 4,
    paddingBottom: 4,
    height: 40
  }
}

export default AddFolder
