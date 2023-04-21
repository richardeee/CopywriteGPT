import { useState } from "react";
import {
  Pivot,
  PivotItem,
  Position,
  Separator,
  Checkbox,
  Panel,
  DefaultButton,
  TextField,
  SpinButton,
  Text,
  PrimaryButton,
  ITextProps,
  Spinner,
  Label,
  Stack,
  IStackTokens,
  Dropdown,
  IDropdownOption,
  MessageBar,
  MessageBarType,
} from "@fluentui/react";
import { useBoolean } from "@fluentui/react-hooks";
import { Icon } from "@fluentui/react/lib/Icon";

import { Editor } from "../../components/Editor";
import styles from "./Copywrite.module.css";
import { generateApi, CopywriteRequest } from "../../api";

const buttonStyles = { root: { marginRight: 8 } };
const verticalGapStackTokens: IStackTokens = {
  childrenGap: 10,
  padding: 10,
};

const Copywrite = () => {
  const [
    isConfigPanelOpen,
    { setTrue: setIsConfigPanelOpen, setFalse: dismissPanel },
  ] = useBoolean(false);
  const [title, setTitle] = useState<string>("");
  const [titleDescription, setTitleDescription] = useState<string>("");
  const [paragraphs, setParagraphs] = useState<number>(5);
  const [maxParagraphLength, setMaxParagraphLength] = useState<number>(100);
  const [useDalle, setUseDalle] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>();
  const [copywriteHTML, setCopywriteHTML] = useState<string>("");
  const [artStyle, setArtStyle] = useState<string[]>(["Landscape Photography"]);

  const art_options = [
    { key: "Baroque", text: "巴洛克风格" },
    { key: "Rococo", text: "洛可可风格" },
    { key: "Romanticism", text: "浪漫主义" },
    { key: "Realism", text: "现实主义" },
    { key: "Impressionism", text: "印象派" },
    { key: "Post-Impressionism", text: "后印象派" },
    { key: "Expressionism", text: "表现主义" },
    { key: "Fauvism", text: "野兽派" },
    { key: "Cubism", text: "立体主义" },
    { key: "Futurism", text: "未来主义" },
    { key: "Dadaism", text: "达达主义" },
    { key: "Surrealism", text: "超现实主义" },
    { key: "Abstract Expressionism", text: "抽象表现主义" },
    { key: "Pop Art", text: "波普艺术" },
    { key: "Op Art", text: "视觉艺术" },
    { key: "Minimalism", text: "极简主义" },
    { key: "Conceptual Art", text: "观念艺术" },
    { key: "Photorealism", text: "超写实主义" },
    { key: "Neo-Expressionism", text: "新表现主义" },
    { key: "Neo-Pop Art", text: "新波普艺术" },
    { key: "Hyperrealism", text: "超现实主义" },
    { key: "Graffiti Art", text: "涂鸦艺术" },
    { key: "Street Art", text: "街头艺术" },
    { key: "Outsider Art", text: "非主流艺术" },
    { key: "Feminist Art", text: "女性主义艺术" },
    { key: "Environmental Art", text: "环境艺术" },
    { key: "Land Art", text: "土地艺术" },
    { key: "Body Art", text: "身体艺术" },
    { key: "Performance Art", text: "行为艺术" },
    { key: "New Media Art", text: "新媒体艺术" },
    { key: "Installations Art", text: "装置艺术" },
    { key: "Video Art", text: "录像艺术" },
    { key: "Conceptual Photography", text: "观念摄影" },
    { key: "Documentary Photography", text: "纪实摄影" },
    { key: "Fine Art Photography", text: "艺术摄影" },
    { key: "Street Photography", text: "街头摄影" },
    { key: "Portrait Photography", text: "肖像摄影" },
    { key: "Landscape Photography", text: "风景摄影" },
    { key: "Still Life Photography", text: "静物摄影" },
    { key: "Graphic Design", text: "平面设计" },
    { key: "Motion Graphics", text: "动态图形设计" },
    { key: "Art Deco", text: "装饰艺术" },
    { key: "Arts and Crafts", text: "艺术与手工艺" },
    { key: "Bauhaus", text: "包豪斯" },
    { key: "Art Nouveau", text: "新艺术" },
    { key: "Ukiyo-e", text: "浮世绘" },
    { key: "Haida Art", text: "海达艺术" },
    { key: "African Art", text: "非洲艺术" },
    { key: "Indigenous Art", text: "土著艺术" },
    { key: "Renaissance", text: "文艺复兴" },
  ];

  const handleEditorChange = (newData: string) => {
    setCopywriteHTML(newData);
  };

  const onArtStylesChange = (
    event: React.FormEvent<HTMLDivElement>,
    item?: IDropdownOption,
    index?: number
  ): void => {
    if (item) {
      setArtStyle(
        item.selected
          ? [...artStyle, item.key as string]
          : artStyle.filter((key) => key !== item.key)
      );
    }
    console.log("artStyle:" + artStyle);
  };

  const onTitleChange = (
    _ev?: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    newValue?: string
  ) => {
    console.log("title:" + newValue);
    setTitle(newValue || "");
  };

  const onTitleDescriptionChange = (
    _ev?: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    newValue?: string
  ) => {
    console.log("titleDescription:" + newValue);
    setTitleDescription(newValue || "");
  };

  const onParagraphsChange = (
    _ev?: React.SyntheticEvent<HTMLElement, Event>,
    newValue?: string
  ) => {
    setParagraphs(parseInt(newValue || "5"));
  };

  const onMaxParagraphLengthChange = (
    _ev?: React.SyntheticEvent<HTMLElement, Event>,
    newValue?: string
  ) => {
    setMaxParagraphLength(parseInt(newValue || "100"));
  };
  const onUseDalleChange = (
    _ev?: React.FormEvent<HTMLElement | HTMLInputElement>,
    checked?: boolean
  ) => {
    setUseDalle(!!checked);
  };

  const generateCopywrite = async () => {
    error && setError(undefined);
    setIsLoading(true);
    setCopywriteHTML("");

    if (!title) {
      setError("标题不能为空");
      setIsLoading(false);
      return;
    }

    if (!titleDescription) {
      setError("标题描述不能为空");
      setIsLoading(false);
      return;
    }
    dismissPanel();

    try {
      const request: CopywriteRequest = {
        approach: "gpt_with_dalle2",
        title: title,
        titleDescription: titleDescription,
        overrides: {
          paragraphs: paragraphs,
          maxParagraphLength: maxParagraphLength,
          useDalle: useDalle,
          artStyle: artStyle,
        },
      };
      const result = await generateApi(request);
      console.log(result.copywriteHTML);
      setCopywriteHTML(result.copywriteHTML);
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.editorContainer}>
        <Pivot className={styles.editor}>
          <PivotItem headerText="编辑器" itemIcon="Edit">
            {isLoading && (
              <>
                <Label>正在生成文案，请稍候</Label>
                <Spinner label="正在生成文案，请稍候" />
              </>
            )}
            {!isLoading && (
              <>
                <Editor data={copywriteHTML} onChange={handleEditorChange} />
              </>
            )}
          </PivotItem>
          <PivotItem headerText="预览" itemIcon="Globe">
            {error ? (
              <div className={styles.previewContainer}>
                <Stack tokens={verticalGapStackTokens}>
                  <Text variant={"xLarge" as ITextProps["variant"]}>
                    <Icon iconName="Error" /> 生成失败
                  </Text>
                  <Text>{error.toString()}</Text>
                  <PrimaryButton onClick={generateCopywrite}>
                    重试
                  </PrimaryButton>
                </Stack>
              </div>
            ) : (
              <div className={styles.previewContainer}>
                {<div dangerouslySetInnerHTML={{ __html: copywriteHTML }} />}
              </div>
            )}
          </PivotItem>
        </Pivot>
      </div>
      <div className={styles.commandsContainer}>
        <PrimaryButton
          className={styles.commandButton}
          iconProps={{ iconName: "Lightbulb" }}
          onClick={() => setIsConfigPanelOpen()}
        >
          文案配置
        </PrimaryButton>
      </div>
      <div>
        <div className={styles.chatRoot}>
          <Panel
            headerText="配置"
            isOpen={isConfigPanelOpen}
            isBlocking={false}
            closeButtonAriaLabel="Close"
            onRenderFooterContent={() => (
              <div>
                <PrimaryButton
                  onClick={generateCopywrite}
                  styles={buttonStyles}
                  iconProps={{ iconName: "Lightbulb" }}
                >
                  生成
                </PrimaryButton>
                <DefaultButton onClick={dismissPanel}>取消</DefaultButton>
              </div>
            )}
            onDismiss={dismissPanel}
            isFooterAtBottom={true}
          >
            {error ? (
              <>
                <MessageBar
                  messageBarType={MessageBarType.error}
                  isMultiline={false}
                  onDismiss={() => setError(undefined)}
                  dismissButtonAriaLabel="Close"
                >
                  {error.toString()}
                </MessageBar>
              </>
            ) : null}
            <TextField
              className={styles.chatSettingsSeparator}
              defaultValue={title}
              label="文案标题"
              multiline
              autoAdjustHeight
              onChange={onTitleChange}
              required={true}
            />
            <TextField
              className={styles.chatSettingsSeparator}
              defaultValue={titleDescription}
              label="文案主要内容"
              multiline
              autoAdjustHeight
              onChange={onTitleDescriptionChange}
              required={true}
            />
            <Separator />
            <SpinButton
              className={styles.chatSettingsSeparator}
              labelPosition={Position.top}
              label="文案分为几段"
              min={1}
              max={50}
              defaultValue={paragraphs.toString()}
              onChange={onParagraphsChange}
            />
            <Separator />
            <SpinButton
              className={styles.chatSettingsSeparator}
              labelPosition={Position.top}
              label="每一段最多多少字"
              min={10}
              max={500}
              defaultValue={maxParagraphLength.toString()}
              onChange={onMaxParagraphLengthChange}
            />
            <Separator />
            <Checkbox
              className={styles.chatSettingsSeparator}
              checked={useDalle}
              label="是否生成图片"
              onChange={onUseDalleChange}
            />
            {useDalle && (
              <Dropdown
                placeholder="选择图片风格"
                label="图片风格"
                selectedKeys={artStyle}
                // eslint-disable-next-line react/jsx-no-bind
                onChange={onArtStylesChange}
                multiSelect
                options={art_options}
              />
            )}
          </Panel>
        </div>
      </div>
    </div>
  );
};

export default Copywrite;
