import { SvelteComponentTyped } from 'svelte';
import { type GridOptions, type GridReadyEvent, type Module } from 'ag-grid-community';
declare class __sveltets_Render<TData> {
  props(): {
    [x: string]: any;
    statusBar?:
      | {
          statusPanels: import('ag-grid-community').StatusPanelDef[];
        }
      | undefined;
    sideBar?:
      | string
      | boolean
      | string[]
      | import('ag-grid-community').SideBarDef
      | null
      | undefined;
    getContextMenuItems?: import('ag-grid-community').GetContextMenuItems<TData> | undefined;
    suppressContextMenu?: boolean | undefined;
    preventDefaultOnContextMenu?: boolean | undefined;
    allowContextMenuWithControlKey?: boolean | undefined;
    getMainMenuItems?: import('ag-grid-community').GetMainMenuItems | undefined;
    suppressMenuHide?: boolean | undefined;
    popupParent?: HTMLElement | null | undefined;
    postProcessPopup?:
      | ((params: import('ag-grid-community').PostProcessPopupParams<TData, any>) => void)
      | undefined;
    copyHeadersToClipboard?: boolean | undefined;
    copyGroupHeadersToClipboard?: boolean | undefined;
    clipboardDelimiter?: string | undefined;
    suppressCutToClipboard?: boolean | undefined;
    suppressCopyRowsToClipboard?: boolean | undefined;
    suppressCopySingleCellRanges?: boolean | undefined;
    suppressLastEmptyLineOnPaste?: boolean | undefined;
    suppressClipboardPaste?: boolean | undefined;
    suppressClipboardApi?: boolean | undefined;
    processCellForClipboard?:
      | ((params: import('ag-grid-community').ProcessCellForExportParams<TData, any>) => any)
      | undefined;
    processHeaderForClipboard?:
      | ((params: import('ag-grid-community').ProcessHeaderForExportParams<TData, any>) => any)
      | undefined;
    processGroupHeaderForClipboard?:
      | ((params: import('ag-grid-community').ProcessGroupHeaderForExportParams<TData, any>) => any)
      | undefined;
    processCellFromClipboard?:
      | ((params: import('ag-grid-community').ProcessCellForExportParams<TData, any>) => any)
      | undefined;
    sendToClipboard?:
      | ((params: import('ag-grid-community').SendToClipboardParams<TData, any>) => void)
      | undefined;
    processDataFromClipboard?:
      | ((
          params: import('ag-grid-community').ProcessDataFromClipboardParams<TData, any>
        ) => string[][] | null)
      | undefined;
    columnDefs?:
      | (
          | import('ag-grid-community').ColDef<TData, any>
          | import('ag-grid-community').ColGroupDef<TData>
        )[]
      | null
      | undefined;
    defaultColDef?: import('ag-grid-community').ColDef<TData, any> | undefined;
    defaultColGroupDef?: Partial<import('ag-grid-community').ColGroupDef<TData>> | undefined;
    columnTypes?:
      | {
          [key: string]: import('ag-grid-community').ColDef<TData, any>;
        }
      | undefined;
    dataTypeDefinitions?:
      | {
          [cellDataType: string]: import('ag-grid-community').DataTypeDefinition<TData>;
        }
      | undefined;
    maintainColumnOrder?: boolean | undefined;
    suppressFieldDotNotation?: boolean | undefined;
    headerHeight?: number | undefined;
    groupHeaderHeight?: number | undefined;
    floatingFiltersHeight?: number | undefined;
    pivotHeaderHeight?: number | undefined;
    pivotGroupHeaderHeight?: number | undefined;
    allowDragFromColumnsToolPanel?: boolean | undefined;
    suppressMovableColumns?: boolean | undefined;
    suppressColumnMoveAnimation?: boolean | undefined;
    suppressDragLeaveHidesColumns?: boolean | undefined;
    suppressRowGroupHidesColumns?: boolean | undefined;
    colResizeDefault?: 'shift' | undefined;
    suppressAutoSize?: boolean | undefined;
    autoSizePadding?: number | undefined;
    skipHeaderOnAutoSize?: boolean | undefined;
    editType?: 'fullRow' | undefined;
    singleClickEdit?: boolean | undefined;
    enableGroupEdit?: boolean | undefined;
    suppressClickEdit?: boolean | undefined;
    stopEditingWhenCellsLoseFocus?: boolean | undefined;
    enterNavigatesVertically?: boolean | undefined;
    enterNavigatesVerticallyAfterEdit?: boolean | undefined;
    enableCellEditingOnBackspace?: boolean | undefined;
    enterMovesDown?: boolean | undefined;
    enterMovesDownAfterEdit?: boolean | undefined;
    undoRedoCellEditing?: boolean | undefined;
    undoRedoCellEditingLimit?: number | undefined;
    readOnlyEdit?: boolean | undefined;
    defaultCsvExportParams?: import('ag-grid-community').CsvExportParams | undefined;
    suppressCsvExport?: boolean | undefined;
    defaultExcelExportParams?: import('ag-grid-community').ExcelExportParams | undefined;
    suppressExcelExport?: boolean | undefined;
    excelStyles?: import('ag-grid-community').ExcelStyle[] | undefined;
    quickFilterText?: string | undefined;
    cacheQuickFilter?: boolean | undefined;
    includeHiddenColumnsInQuickFilter?: boolean | undefined;
    isExternalFilterPresent?:
      | ((params: import('ag-grid-community').IsExternalFilterPresentParams<TData, any>) => boolean)
      | undefined;
    doesExternalFilterPass?:
      | ((node: import('ag-grid-community').IRowNode<TData>) => boolean)
      | undefined;
    excludeChildrenWhenTreeDataFiltering?: boolean | undefined;
    enableCharts?: boolean | undefined;
    suppressChartToolPanelsButton?: boolean | undefined;
    getChartToolbarItems?: import('ag-grid-community').GetChartToolbarItems | undefined;
    createChartContainer?:
      | ((params: import('ag-grid-community').ChartRefParams<TData>) => void)
      | undefined;
    chartThemes?: string[] | undefined;
    customChartThemes?:
      | {
          [name: string]: import('ag-grid-community').AgChartTheme;
        }
      | undefined;
    chartThemeOverrides?: import('ag-grid-community').AgChartThemeOverrides | undefined;
    chartToolPanelsDef?: import('ag-grid-community').ChartToolPanelsDef | undefined;
    navigateToNextHeader?:
      | ((
          params: import('ag-grid-community').NavigateToNextHeaderParams<TData, any>
        ) => import('ag-grid-community').HeaderPosition | null)
      | undefined;
    tabToNextHeader?:
      | ((
          params: import('ag-grid-community').TabToNextHeaderParams<TData, any>
        ) => import('ag-grid-community').HeaderPosition | null)
      | undefined;
    navigateToNextCell?:
      | ((
          params: import('ag-grid-community').NavigateToNextCellParams<TData, any>
        ) => import('ag-grid-community').CellPosition | null)
      | undefined;
    tabToNextCell?:
      | ((
          params: import('ag-grid-community').TabToNextCellParams<TData, any>
        ) => import('ag-grid-community').CellPosition | null)
      | undefined;
    loadingCellRenderer?: any;
    loadingCellRendererParams?: any;
    loadingCellRendererSelector?:
      | import('ag-grid-community').LoadingCellRendererSelectorFunc<TData>
      | undefined;
    localeText?:
      | {
          [key: string]: string;
        }
      | undefined;
    getLocaleText?:
      | ((params: import('ag-grid-community').GetLocaleTextParams<TData, any>) => string)
      | undefined;
    masterDetail?: boolean | undefined;
    isRowMaster?: import('ag-grid-community').IsRowMaster<TData> | undefined;
    detailCellRenderer?: any;
    detailCellRendererParams?: any;
    detailRowHeight?: number | undefined;
    detailRowAutoHeight?: boolean | undefined;
    embedFullWidthRows?: boolean | undefined;
    keepDetailRows?: boolean | undefined;
    keepDetailRowsCount?: number | undefined;
    api?: import('ag-grid-community').GridApi<TData> | null | undefined;
    columnApi?: import('ag-grid-community').ColumnApi | null | undefined;
    alignedGrids?:
      | {
          api?: import('ag-grid-community').GridApi<any> | null | undefined;
          columnApi?: import('ag-grid-community').ColumnApi | null | undefined;
        }[]
      | undefined;
    context?: any;
    tabIndex?: number | undefined;
    rowBuffer?: number | undefined;
    valueCache?: boolean | undefined;
    valueCacheNeverExpires?: boolean | undefined;
    enableCellExpressions?: boolean | undefined;
    getDocument?: (() => Document) | undefined;
    suppressParentsInRowNodes?: boolean | undefined;
    suppressTouch?: boolean | undefined;
    suppressFocusAfterRefresh?: boolean | undefined;
    suppressAsyncEvents?: boolean | undefined;
    suppressBrowserResizeObserver?: boolean | undefined;
    suppressPropertyNamesCheck?: boolean | undefined;
    suppressChangeDetection?: boolean | undefined;
    debug?: boolean | undefined;
    overlayLoadingTemplate?: string | undefined;
    loadingOverlayComponent?: any;
    loadingOverlayComponentParams?: any;
    suppressLoadingOverlay?: boolean | undefined;
    overlayNoRowsTemplate?: string | undefined;
    noRowsOverlayComponent?: any;
    noRowsOverlayComponentParams?: any;
    suppressNoRowsOverlay?: boolean | undefined;
    pagination?: boolean | undefined;
    paginationPageSize?: number | undefined;
    paginationNumberFormatter?:
      | ((
          params: import('ag-grid-community').PaginationNumberFormatterParams<TData, any>
        ) => string)
      | undefined;
    paginationAutoPageSize?: boolean | undefined;
    paginateChildRows?: boolean | undefined;
    suppressPaginationPanel?: boolean | undefined;
    pivotMode?: boolean | undefined;
    pivotPanelShow?: 'always' | 'onlyWhenPivoting' | 'never' | undefined;
    pivotColumnGroupTotals?: 'before' | 'after' | undefined;
    pivotRowTotals?: 'before' | 'after' | undefined;
    pivotSuppressAutoColumn?: boolean | undefined;
    processPivotResultColDef?:
      | ((colDef: import('ag-grid-community').ColDef<TData, any>) => void)
      | undefined;
    processPivotResultColGroupDef?:
      | ((colGroupDef: import('ag-grid-community').ColGroupDef<TData>) => void)
      | undefined;
    suppressExpandablePivotGroups?: boolean | undefined;
    functionsReadOnly?: boolean | undefined;
    aggFuncs?:
      | {
          [key: string]: import('ag-grid-community').IAggFunc<TData, any>;
        }
      | undefined;
    getGroupRowAgg?:
      | ((params: import('ag-grid-community').GetGroupRowAggParams<TData, any>) => any)
      | undefined;
    suppressAggFuncInHeader?: boolean | undefined;
    alwaysAggregateAtRootLevel?: boolean | undefined;
    suppressAggAtRootLevel?: boolean | undefined;
    aggregateOnlyChangedColumns?: boolean | undefined;
    suppressAggFilteredOnly?: boolean | undefined;
    groupAggFiltering?: boolean | import('ag-grid-community').IsRowFilterable<TData> | undefined;
    removePivotHeaderRowWhenSingleValueColumn?: boolean | undefined;
    animateRows?: boolean | undefined;
    enableCellChangeFlash?: boolean | undefined;
    cellFlashDelay?: number | undefined;
    cellFadeDelay?: number | undefined;
    allowShowChangeAfterFilter?: boolean | undefined;
    domLayout?: import('ag-grid-community').DomLayoutType | undefined;
    ensureDomOrder?: boolean | undefined;
    getBusinessKeyForNode?:
      | ((node: import('ag-grid-community').IRowNode<TData>) => string)
      | undefined;
    gridId?: string | undefined;
    processRowPostCreate?:
      | ((params: import('ag-grid-community').ProcessRowParams<TData, any>) => void)
      | undefined;
    enableRtl?: boolean | undefined;
    suppressColumnVirtualisation?: boolean | undefined;
    suppressRowVirtualisation?: boolean | undefined;
    suppressMaxRenderedRowRestriction?: boolean | undefined;
    rowDragManaged?: boolean | undefined;
    rowDragEntireRow?: boolean | undefined;
    rowDragMultiRow?: boolean | undefined;
    suppressRowDrag?: boolean | undefined;
    suppressMoveWhenRowDragging?: boolean | undefined;
    rowDragText?:
      | ((params: import('ag-grid-community').IRowDragItem, dragItemCount: number) => string)
      | undefined;
    fullWidthCellRenderer?: any;
    fullWidthCellRendererParams?: any;
    groupDisplayType?: import('ag-grid-community').RowGroupingDisplayType | undefined;
    groupDefaultExpanded?: number | undefined;
    autoGroupColumnDef?: import('ag-grid-community').ColDef<TData, any> | undefined;
    groupMaintainOrder?: boolean | undefined;
    groupSelectsChildren?: boolean | undefined;
    groupIncludeFooter?: boolean | undefined;
    groupIncludeTotalFooter?: boolean | undefined;
    groupSuppressBlankHeader?: boolean | undefined;
    groupSelectsFiltered?: boolean | undefined;
    showOpenedGroup?: boolean | undefined;
    isGroupOpenByDefault?:
      | ((params: import('ag-grid-community').IsGroupOpenByDefaultParams<TData, any>) => boolean)
      | undefined;
    initialGroupOrderComparator?:
      | ((
          params: import('ag-grid-community').InitialGroupOrderComparatorParams<TData, any>
        ) => number)
      | undefined;
    groupRemoveSingleChildren?: boolean | undefined;
    groupRemoveLowestSingleChildren?: boolean | undefined;
    groupHideOpenParents?: boolean | undefined;
    groupAllowUnbalanced?: boolean | undefined;
    rowGroupPanelShow?: 'always' | 'never' | 'onlyWhenGrouping' | undefined;
    rowGroupPanelSuppressSort?: boolean | undefined;
    groupRowRenderer?: any;
    groupRowRendererParams?: any;
    suppressGroupRowsSticky?: boolean | undefined;
    suppressMakeColumnVisibleAfterUnGroup?: boolean | undefined;
    treeData?: boolean | undefined;
    treeDataDisplayType?: import('ag-grid-community').TreeDataDisplayType | undefined;
    getDataPath?: import('ag-grid-community').GetDataPath<TData> | undefined;
    pinnedTopRowData?: any[] | undefined;
    pinnedBottomRowData?: any[] | undefined;
    rowModelType?: import('ag-grid-community').RowModelType | undefined;
    getRowId?: import('ag-grid-community').GetRowIdFunc<TData> | undefined;
    rowData?: TData[] | null | undefined;
    resetRowDataOnUpdate?: boolean | undefined;
    asyncTransactionWaitMillis?: number | undefined;
    suppressModelUpdateAfterUpdateTransaction?: boolean | undefined;
    datasource?: import('ag-grid-community').IDatasource | undefined;
    cacheOverflowSize?: number | undefined;
    maxConcurrentDatasourceRequests?: number | undefined;
    cacheBlockSize?: number | undefined;
    maxBlocksInCache?: number | undefined;
    infiniteInitialRowCount?: number | undefined;
    serverSideDatasource?: import('ag-grid-community').IServerSideDatasource | undefined;
    blockLoadDebounceMillis?: number | undefined;
    purgeClosedRowNodes?: boolean | undefined;
    serverSideSortAllLevels?: boolean | undefined;
    serverSideOnlyRefreshFilteredGroups?: boolean | undefined;
    serverSideFilterAllLevels?: boolean | undefined;
    serverSideSortOnServer?: boolean | undefined;
    serverSideFilterOnServer?: boolean | undefined;
    serverSideInitialRowCount?: number | undefined;
    suppressServerSideInfiniteScroll?: boolean | undefined;
    getChildCount?: ((dataItem: any) => number) | undefined;
    getServerSideGroupLevelParams?:
      | ((
          params: import('ag-grid-community').GetServerSideGroupLevelParamsParams
        ) => import('ag-grid-community').ServerSideGroupLevelParams)
      | undefined;
    isServerSideGroupOpenByDefault?:
      | ((params: import('ag-grid-community').IsServerSideGroupOpenByDefaultParams) => boolean)
      | undefined;
    isApplyServerSideTransaction?:
      | import('ag-grid-community').IsApplyServerSideTransaction
      | undefined;
    isServerSideGroup?: import('ag-grid-community').IsServerSideGroup | undefined;
    getServerSideGroupKey?: import('ag-grid-community').GetServerSideGroupKey | undefined;
    viewportDatasource?: import('ag-grid-community').IViewportDatasource | undefined;
    viewportRowModelPageSize?: number | undefined;
    viewportRowModelBufferSize?: number | undefined;
    alwaysShowHorizontalScroll?: boolean | undefined;
    alwaysShowVerticalScroll?: boolean | undefined;
    debounceVerticalScrollbar?: boolean | undefined;
    suppressHorizontalScroll?: boolean | undefined;
    suppressScrollOnNewData?: boolean | undefined;
    suppressScrollWhenPopupsAreOpen?: boolean | undefined;
    suppressAnimationFrame?: boolean | undefined;
    suppressMiddleClickScrolls?: boolean | undefined;
    suppressPreventDefaultOnMouseWheel?: boolean | undefined;
    scrollbarWidth?: number | undefined;
    rowSelection?: 'single' | 'multiple' | undefined;
    rowMultiSelectWithClick?: boolean | undefined;
    isRowSelectable?: import('ag-grid-community').IsRowSelectable<TData> | undefined;
    suppressRowDeselection?: boolean | undefined;
    suppressRowClickSelection?: boolean | undefined;
    suppressCellFocus?: boolean | undefined;
    suppressMultiRangeSelection?: boolean | undefined;
    enableCellTextSelection?: boolean | undefined;
    enableRangeSelection?: boolean | undefined;
    enableRangeHandle?: boolean | undefined;
    enableFillHandle?: boolean | undefined;
    fillHandleDirection?: 'x' | 'y' | 'xy' | undefined;
    fillOperation?:
      | ((params: import('ag-grid-community').FillOperationParams<TData, any>) => any)
      | undefined;
    suppressClearOnFillReduction?: boolean | undefined;
    sortingOrder?: import('ag-grid-community').SortDirection[] | undefined;
    accentedSort?: boolean | undefined;
    unSortIcon?: boolean | undefined;
    suppressMultiSort?: boolean | undefined;
    alwaysMultiSort?: boolean | undefined;
    multiSortKey?: 'ctrl' | undefined;
    suppressMaintainUnsortedOrder?: boolean | undefined;
    postSortRows?:
      | ((params: import('ag-grid-community').PostSortRowsParams<TData, any>) => void)
      | undefined;
    deltaSort?: boolean | undefined;
    icons?:
      | {
          [key: string]: string | Function;
        }
      | undefined;
    rowHeight?: number | undefined;
    getRowHeight?:
      | ((
          params: import('ag-grid-community').RowHeightParams<TData, any>
        ) => number | null | undefined)
      | undefined;
    rowStyle?: import('ag-grid-community').RowStyle | undefined;
    getRowStyle?:
      | ((
          params: import('ag-grid-community').RowClassParams<TData, any>
        ) => import('ag-grid-community').RowStyle | undefined)
      | undefined;
    rowClass?: string | string[] | undefined;
    getRowClass?:
      | ((
          params: import('ag-grid-community').RowClassParams<TData, any>
        ) => string | string[] | undefined)
      | undefined;
    rowClassRules?: import('ag-grid-community').RowClassRules<TData> | undefined;
    isFullWidthRow?:
      | ((params: import('ag-grid-community').IsFullWidthRowParams<TData, any>) => boolean)
      | undefined;
    suppressRowHoverHighlight?: boolean | undefined;
    suppressRowTransform?: boolean | undefined;
    columnHoverHighlight?: boolean | undefined;
    enableBrowserTooltips?: boolean | undefined;
    tooltipShowDelay?: number | undefined;
    tooltipHideDelay?: number | undefined;
    tooltipMouseTrack?: boolean | undefined;
    onGridReady?: ((event: GridReadyEvent<TData, any>) => void) | undefined;
    gridOptions?: GridOptions<TData> | undefined;
    modules?: Module[] | undefined;
    className?: string | undefined;
    style?: string | undefined;
  };
  events(): {} & {
    [evt: string]: CustomEvent<any>;
  };
  slots(): {};
}
export type AgGridSvelteProps<TData> = ReturnType<__sveltets_Render<TData>['props']>;
export type AgGridSvelteEvents<TData> = ReturnType<__sveltets_Render<TData>['events']>;
export type AgGridSvelteSlots<TData> = ReturnType<__sveltets_Render<TData>['slots']>;
export default class AgGridSvelte<TData> extends SvelteComponentTyped<
  AgGridSvelteProps<TData>,
  AgGridSvelteEvents<TData>,
  AgGridSvelteSlots<TData>
> {}
export {};
