import type { SchematicOptionObject } from '@o3r/schematics';

export type PresetNames = 'basic' | 'cms';

export interface NgAddSchematicsSchema extends SchematicOptionObject {
  /** Preset of module list to automatically install */
  preset: PresetNames;

  /** Project name */
  projectName?: string | undefined;

  /** Enable otter customization */
  enableCustomization: boolean;

  /** Enable otter analytics */
  enableAnalytics: boolean;

  /** Enable otter styling */
  enableStyling: boolean;

   /** Enable otter rules-engine */
  enableRulesEngine: boolean;

  /** Enable localization */
  enableLocalization: boolean;

  /** Enable configuration setup */
  enableConfiguration: boolean;

  /** Enable Storybook */
  enableStorybook: boolean;

  /** Skip the linter process */
  skipLinter: boolean;

  /** Generate the Azure Pipeline for the new project */
  generateAzurePipeline: boolean;

  /** Skip the install process */
  skipInstall: boolean;

  /** Enable Apis manager */
  enableApisManager: boolean;

  /** Initial git repository commit information. */
  commit: boolean | { name: string; email: string };

  /** Do not initialize a git repository. */
  skipGit: boolean;
}
