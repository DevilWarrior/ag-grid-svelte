<script context="module">
  'use strict';
  const formatProperty = new Map([
    ...ComponentUtil.BOOLEAN_PROPERTIES.map((prop) => [prop, ComponentUtil.toBoolean]),
    ...ComponentUtil.NUMBER_PROPERTIES.map((prop) => [prop, ComponentUtil.toNumber])
  ]);
</script>

<script>
  import { ComponentUtil, Grid } from 'ag-grid-community';
  import { onMount } from 'svelte';
  import {
    SvelteFrameworkComponentWrapper,
    SvelteFrameworkOverrides
  } from './SvelteFrameworkComponentWrapper';
  /* Grid options props */
  // Accessories
  export let statusBar = undefined;
  export let sideBar = undefined;
  export let getContextMenuItems = undefined;
  export let suppressContextMenu = undefined;
  export let preventDefaultOnContextMenu = undefined;
  export let allowContextMenuWithControlKey = undefined;
  export let getMainMenuItems = undefined;
  export let suppressMenuHide = undefined;
  export let popupParent = undefined;
  export let postProcessPopup = undefined;
  // Clipboard
  export let copyHeadersToClipboard = undefined;
  export let copyGroupHeadersToClipboard = undefined;
  export let clipboardDelimiter = undefined;
  export let suppressCutToClipboard = undefined;
  export let suppressCopyRowsToClipboard = undefined;
  export let suppressCopySingleCellRanges = undefined;
  export let suppressLastEmptyLineOnPaste = undefined;
  export let suppressClipboardPaste = undefined;
  export let suppressClipboardApi = undefined;
  export let processCellForClipboard = undefined;
  export let processHeaderForClipboard = undefined;
  export let processGroupHeaderForClipboard = undefined;
  export let processCellFromClipboard = undefined;
  export let sendToClipboard = undefined;
  export let processDataFromClipboard = undefined;
  // Columns
  export let columnDefs = undefined;
  export let defaultColDef = undefined;
  export let defaultColGroupDef = undefined;
  export let columnTypes = undefined;
  export let dataTypeDefinitions = undefined;
  export let maintainColumnOrder = undefined;
  export let suppressFieldDotNotation = undefined;
  // Column Headers
  export let headerHeight = undefined;
  export let groupHeaderHeight = undefined;
  export let floatingFiltersHeight = undefined;
  export let pivotHeaderHeight = undefined;
  export let pivotGroupHeaderHeight = undefined;
  // Column Moving
  export let allowDragFromColumnsToolPanel = undefined;
  export let suppressMovableColumns = undefined;
  export let suppressColumnMoveAnimation = undefined;
  export let suppressDragLeaveHidesColumns = undefined;
  export let suppressRowGroupHidesColumns = undefined;
  // Column Sizing
  export let colResizeDefault = undefined;
  export let suppressAutoSize = undefined;
  export let autoSizePadding = undefined;
  export let skipHeaderOnAutoSize = undefined;
  // Components (TODO)
  // export let components: Options['components'] = undefined;
  // Editing
  export let editType = undefined;
  export let singleClickEdit = undefined;
  export let enableGroupEdit = undefined;
  export let suppressClickEdit = undefined;
  export let stopEditingWhenCellsLoseFocus = undefined;
  export let enterNavigatesVertically = undefined;
  export let enterNavigatesVerticallyAfterEdit = undefined;
  export let enableCellEditingOnBackspace = undefined;
  export let enterMovesDown = undefined;
  export let enterMovesDownAfterEdit = undefined;
  export let undoRedoCellEditing = undefined;
  export let undoRedoCellEditingLimit = undefined;
  export let readOnlyEdit = undefined;
  // Export
  export let defaultCsvExportParams = undefined;
  export let suppressCsvExport = undefined;
  export let defaultExcelExportParams = undefined;
  export let suppressExcelExport = undefined;
  export let excelStyles = undefined;
  // Filtering
  export let quickFilterText = undefined;
  export let cacheQuickFilter = undefined;
  export let includeHiddenColumnsInQuickFilter = undefined;
  export let isExternalFilterPresent = undefined;
  export let doesExternalFilterPass = undefined;
  export let excludeChildrenWhenTreeDataFiltering = undefined;
  // Integrated Charts
  export let enableCharts = undefined;
  export let suppressChartToolPanelsButton = undefined;
  export let getChartToolbarItems = undefined;
  export let createChartContainer = undefined;
  export let chartThemes = undefined;
  export let customChartThemes = undefined;
  export let chartThemeOverrides = undefined;
  export let chartToolPanelsDef = undefined;
  // Keyboard Navigation
  export let navigateToNextHeader = undefined;
  export let tabToNextHeader = undefined;
  export let navigateToNextCell = undefined;
  export let tabToNextCell = undefined;
  // Loading Cell Renderers
  export let loadingCellRenderer = undefined;
  export let loadingCellRendererParams = undefined;
  export let loadingCellRendererSelector = undefined;
  // Localisation
  export let localeText = undefined;
  export let getLocaleText = undefined;
  // Master Detail
  export let masterDetail = undefined;
  export let isRowMaster = undefined;
  export let detailCellRenderer = undefined;
  export let detailCellRendererParams = undefined;
  export let detailRowHeight = undefined;
  export let detailRowAutoHeight = undefined;
  export let embedFullWidthRows = undefined;
  export let keepDetailRows = undefined;
  export let keepDetailRowsCount = undefined;
  // Miscellaneous
  export let api = undefined;
  export let columnApi = undefined;
  export let alignedGrids = undefined;
  export let context = undefined;
  export let tabIndex = undefined;
  export let rowBuffer = undefined;
  export let valueCache = undefined;
  export let valueCacheNeverExpires = undefined;
  export let enableCellExpressions = undefined;
  export let getDocument = undefined;
  export let suppressParentsInRowNodes = undefined;
  export let suppressTouch = undefined;
  export let suppressFocusAfterRefresh = undefined;
  export let suppressAsyncEvents = undefined;
  export let suppressBrowserResizeObserver = undefined;
  export let suppressPropertyNamesCheck = undefined;
  export let suppressChangeDetection = undefined;
  export let debug = undefined;
  // Overlays
  export let overlayLoadingTemplate = undefined;
  export let loadingOverlayComponent = undefined;
  export let loadingOverlayComponentParams = undefined;
  export let suppressLoadingOverlay = undefined;
  export let overlayNoRowsTemplate = undefined;
  export let noRowsOverlayComponent = undefined;
  export let noRowsOverlayComponentParams = undefined;
  export let suppressNoRowsOverlay = undefined;
  // Pagination
  export let pagination = undefined;
  export let paginationPageSize = undefined;
  export let paginationNumberFormatter = undefined;
  export let paginationAutoPageSize = undefined;
  export let paginateChildRows = undefined;
  export let suppressPaginationPanel = undefined;
  // Pivot and Aggregation
  export let pivotMode = undefined;
  export let pivotPanelShow = undefined;
  export let pivotColumnGroupTotals = undefined;
  export let pivotRowTotals = undefined;
  export let pivotSuppressAutoColumn = undefined;
  export let processPivotResultColDef = undefined;
  export let processPivotResultColGroupDef = undefined;
  export let suppressExpandablePivotGroups = undefined;
  export let functionsReadOnly = undefined;
  export let aggFuncs = undefined;
  export let getGroupRowAgg = undefined;
  export let suppressAggFuncInHeader = undefined;
  export let alwaysAggregateAtRootLevel = undefined;
  export let suppressAggAtRootLevel = undefined;
  export let aggregateOnlyChangedColumns = undefined;
  export let suppressAggFilteredOnly = undefined;
  export let groupAggFiltering = undefined;
  export let removePivotHeaderRowWhenSingleValueColumn = undefined;
  // Rendering
  export let animateRows = undefined;
  export let enableCellChangeFlash = undefined;
  export let cellFlashDelay = undefined;
  export let cellFadeDelay = undefined;
  export let allowShowChangeAfterFilter = undefined;
  export let domLayout = undefined;
  export let ensureDomOrder = undefined;
  export let getBusinessKeyForNode = undefined;
  export let gridId = undefined;
  export let processRowPostCreate = undefined;
  export let enableRtl = undefined;
  export let suppressColumnVirtualisation = undefined;
  export let suppressRowVirtualisation = undefined;
  export let suppressMaxRenderedRowRestriction = undefined;
  // Row Drag and Drop
  export let rowDragManaged = undefined;
  export let rowDragEntireRow = undefined;
  export let rowDragMultiRow = undefined;
  export let suppressRowDrag = undefined;
  export let suppressMoveWhenRowDragging = undefined;
  export let rowDragText = undefined;
  // Row Full Width
  export let fullWidthCellRenderer = undefined;
  export let fullWidthCellRendererParams = undefined;
  // Row Grouping
  export let groupDisplayType = undefined;
  export let groupDefaultExpanded = undefined;
  export let autoGroupColumnDef = undefined;
  export let groupMaintainOrder = undefined;
  export let groupSelectsChildren = undefined;
  export let groupIncludeFooter = undefined;
  export let groupIncludeTotalFooter = undefined;
  export let groupSuppressBlankHeader = undefined;
  export let groupSelectsFiltered = undefined;
  export let showOpenedGroup = undefined;
  export let isGroupOpenByDefault = undefined;
  export let initialGroupOrderComparator = undefined;
  export let groupRemoveSingleChildren = undefined;
  export let groupRemoveLowestSingleChildren = undefined;
  export let groupHideOpenParents = undefined;
  export let groupAllowUnbalanced = undefined;
  export let rowGroupPanelShow = undefined;
  export let rowGroupPanelSuppressSort = undefined;
  export let groupRowRenderer = undefined;
  export let groupRowRendererParams = undefined;
  // export let suppressDragLeaveHidesColumns: Options['suppressDragLeaveHidesColumns'] = undefined;
  export let suppressGroupRowsSticky = undefined;
  // export let suppressRowGroupHidesColumns: Options['suppressRowGroupHidesColumns'] = undefined;
  export let suppressMakeColumnVisibleAfterUnGroup = undefined;
  export let treeData = undefined;
  export let treeDataDisplayType = undefined;
  export let getDataPath = undefined;
  // Row Pinning
  export let pinnedTopRowData = undefined;
  export let pinnedBottomRowData = undefined;
  // RowModel
  export let rowModelType = undefined;
  export let getRowId = undefined;
  // RowModel: Client-Side
  export let rowData = undefined;
  export let resetRowDataOnUpdate = undefined;
  export let asyncTransactionWaitMillis = undefined;
  export let suppressModelUpdateAfterUpdateTransaction = undefined;
  // RowModel: Infinite
  export let datasource = undefined;
  export let cacheOverflowSize = undefined;
  export let maxConcurrentDatasourceRequests = undefined;
  export let cacheBlockSize = undefined;
  export let maxBlocksInCache = undefined;
  export let infiniteInitialRowCount = undefined;
  // RowModel: Server-Side
  export let serverSideDatasource = undefined;
  // export let cacheBlockSize: Options['cacheBlockSize'] = undefined;
  // export let maxBlocksInCache: Options['maxBlocksInCache'] = undefined;
  // export let maxConcurrentDatasourceRequests: Options['maxConcurrentDatasourceRequests'] =
  undefined;
  export let blockLoadDebounceMillis = undefined;
  export let purgeClosedRowNodes = undefined;
  export let serverSideSortAllLevels = undefined;
  export let serverSideOnlyRefreshFilteredGroups = undefined;
  export let serverSideFilterAllLevels = undefined;
  export let serverSideSortOnServer = undefined;
  export let serverSideFilterOnServer = undefined;
  export let serverSideInitialRowCount = undefined;
  export let suppressServerSideInfiniteScroll = undefined;
  export let getChildCount = undefined;
  export let getServerSideGroupLevelParams = undefined;
  export let isServerSideGroupOpenByDefault = undefined;
  export let isApplyServerSideTransaction = undefined;
  export let isServerSideGroup = undefined;
  export let getServerSideGroupKey = undefined;
  // RowModel: Viewport
  export let viewportDatasource = undefined;
  export let viewportRowModelPageSize = undefined;
  export let viewportRowModelBufferSize = undefined;
  // Scrolling
  export let alwaysShowHorizontalScroll = undefined;
  export let alwaysShowVerticalScroll = undefined;
  export let debounceVerticalScrollbar = undefined;
  export let suppressHorizontalScroll = undefined;
  export let suppressScrollOnNewData = undefined;
  export let suppressScrollWhenPopupsAreOpen = undefined;
  export let suppressAnimationFrame = undefined;
  export let suppressMiddleClickScrolls = undefined;
  export let suppressPreventDefaultOnMouseWheel = undefined;
  export let scrollbarWidth = undefined;
  // Selection
  export let rowSelection = undefined;
  export let rowMultiSelectWithClick = undefined;
  export let isRowSelectable = undefined;
  export let suppressRowDeselection = undefined;
  export let suppressRowClickSelection = undefined;
  export let suppressCellFocus = undefined;
  export let suppressMultiRangeSelection = undefined;
  export let enableCellTextSelection = undefined;
  export let enableRangeSelection = undefined;
  export let enableRangeHandle = undefined;
  export let enableFillHandle = undefined;
  export let fillHandleDirection = undefined;
  export let fillOperation = undefined;
  export let suppressClearOnFillReduction = undefined;
  // Sorting
  export let sortingOrder = undefined;
  export let accentedSort = undefined;
  export let unSortIcon = undefined;
  export let suppressMultiSort = undefined;
  export let alwaysMultiSort = undefined;
  export let multiSortKey = undefined;
  export let suppressMaintainUnsortedOrder = undefined;
  export let postSortRows = undefined;
  export let deltaSort = undefined;
  // Styling
  export let icons = undefined;
  export let rowHeight = undefined;
  export let getRowHeight = undefined;
  export let rowStyle = undefined;
  export let getRowStyle = undefined;
  export let rowClass = undefined;
  export let getRowClass = undefined;
  export let rowClassRules = undefined;
  export let isFullWidthRow = undefined;
  export let suppressRowHoverHighlight = undefined;
  export let suppressRowTransform = undefined;
  export let columnHoverHighlight = undefined;
  // Tooltips
  export let enableBrowserTooltips = undefined;
  export let tooltipShowDelay = undefined;
  export let tooltipHideDelay = undefined;
  export let tooltipMouseTrack = undefined;
  // Events
  export let onGridReady = undefined;
  /* Non-reactive */
  export let gridOptions = {};
  export let modules = [];
  /* Svelte-specific additional props */
  export let className = '';
  export let style = '';
  let eGui;
  let ready = false;
  onMount(() => {
    const _onGridReady = gridOptions.onGridReady;
    gridOptions = ComponentUtil.copyAttributesToGridOptions(gridOptions, {
      ...$$props,
      onGridReady(event) {
        ready = true;
        api = event.api;
        columnApi = event.columnApi;
        onGridReady?.(event);
        _onGridReady?.(event);
      }
    });
    const gridParams = {
      providedBeanInstances: {
        frameworkComponentWrapper: new SvelteFrameworkComponentWrapper()
      },
      frameworkOverrides: new SvelteFrameworkOverrides(),
      modules
    };
    const grid = new Grid(eGui, gridOptions, gridParams);
    return () => {
      grid.destroy();
      ready = false;
    };
  });
  const updateProp = (key, prop) => {
    if (!api || !ready) return;
    const setters = api;
    const setterName = `set${key.charAt(0).toUpperCase()}${key.substring(1)}`;
    const formattedProp = formatProperty.get(key)?.(prop) ?? prop;
    setters[setterName]?.(formattedProp);
    gridOptions[key] = formattedProp;
  };
  // Tooltips (Update first?
  $: updateProp('enableBrowserTooltips', enableBrowserTooltips);
  $: updateProp('tooltipShowDelay', tooltipShowDelay);
  $: updateProp('tooltipHideDelay', tooltipHideDelay);
  $: updateProp('tooltipMouseTrack', tooltipMouseTrack);
  // Accessories
  $: updateProp('statusBar', statusBar);
  $: updateProp('sideBar', sideBar);
  $: updateProp('getContextMenuItems', getContextMenuItems);
  $: updateProp('suppressContextMenu', suppressContextMenu);
  $: updateProp('preventDefaultOnContextMenu', preventDefaultOnContextMenu);
  $: updateProp('allowContextMenuWithControlKey', allowContextMenuWithControlKey);
  $: updateProp('getMainMenuItems', getMainMenuItems);
  $: updateProp('suppressMenuHide', suppressMenuHide);
  $: updateProp('popupParent', popupParent);
  $: updateProp('postProcessPopup', postProcessPopup);
  // Clipboard
  $: updateProp('copyHeadersToClipboard', copyHeadersToClipboard);
  $: updateProp('copyGroupHeadersToClipboard', copyGroupHeadersToClipboard);
  $: updateProp('clipboardDelimiter', clipboardDelimiter);
  $: updateProp('suppressCutToClipboard', suppressCutToClipboard);
  $: updateProp('suppressCopyRowsToClipboard', suppressCopyRowsToClipboard);
  $: updateProp('suppressCopySingleCellRanges', suppressCopySingleCellRanges);
  $: updateProp('suppressLastEmptyLineOnPaste', suppressLastEmptyLineOnPaste);
  $: updateProp('suppressClipboardPaste', suppressClipboardPaste);
  $: updateProp('suppressClipboardApi', suppressClipboardApi);
  $: updateProp('processCellForClipboard', processCellForClipboard);
  $: updateProp('processHeaderForClipboard', processHeaderForClipboard);
  $: updateProp('processGroupHeaderForClipboard', processGroupHeaderForClipboard);
  $: updateProp('processCellFromClipboard', processCellFromClipboard);
  $: updateProp('sendToClipboard', sendToClipboard);
  $: updateProp('processDataFromClipboard', processDataFromClipboard);
  // Columns
  $: updateProp('defaultColDef', defaultColDef);
  $: updateProp('defaultColGroupDef', defaultColGroupDef);
  $: updateProp('columnTypes', columnTypes);
  $: updateProp('dataTypeDefinitions', dataTypeDefinitions);
  $: updateProp('maintainColumnOrder', maintainColumnOrder);
  $: updateProp('suppressFieldDotNotation', suppressFieldDotNotation);
  $: updateProp('columnDefs', columnDefs); // Update columnDefs last
  // Column Headers
  $: updateProp('headerHeight', headerHeight);
  $: updateProp('groupHeaderHeight', groupHeaderHeight);
  $: updateProp('floatingFiltersHeight', floatingFiltersHeight);
  $: updateProp('pivotHeaderHeight', pivotHeaderHeight);
  $: updateProp('pivotGroupHeaderHeight', pivotGroupHeaderHeight);
  // Column Moving
  $: updateProp('allowDragFromColumnsToolPanel', allowDragFromColumnsToolPanel);
  $: updateProp('suppressMovableColumns', suppressMovableColumns);
  $: updateProp('suppressColumnMoveAnimation', suppressColumnMoveAnimation);
  $: updateProp('suppressDragLeaveHidesColumns', suppressDragLeaveHidesColumns);
  $: updateProp('suppressRowGroupHidesColumns', suppressRowGroupHidesColumns);
  // Column Sizing
  $: updateProp('colResizeDefault', colResizeDefault);
  $: updateProp('suppressAutoSize', suppressAutoSize);
  $: updateProp('autoSizePadding', autoSizePadding);
  $: updateProp('skipHeaderOnAutoSize', skipHeaderOnAutoSize);
  // Editing
  $: updateProp('editType', editType);
  $: updateProp('singleClickEdit', singleClickEdit);
  $: updateProp('enableGroupEdit', enableGroupEdit);
  $: updateProp('suppressClickEdit', suppressClickEdit);
  $: updateProp('stopEditingWhenCellsLoseFocus', stopEditingWhenCellsLoseFocus);
  $: updateProp('enterNavigatesVertically', enterNavigatesVertically);
  $: updateProp('enterNavigatesVerticallyAfterEdit', enterNavigatesVerticallyAfterEdit);
  $: updateProp('enableCellEditingOnBackspace', enableCellEditingOnBackspace);
  $: updateProp('enterMovesDown', enterMovesDown);
  $: updateProp('enterMovesDownAfterEdit', enterMovesDownAfterEdit);
  $: updateProp('undoRedoCellEditing', undoRedoCellEditing);
  $: updateProp('undoRedoCellEditingLimit', undoRedoCellEditingLimit);
  $: updateProp('readOnlyEdit', readOnlyEdit);
  // Export
  $: updateProp('defaultCsvExportParams', defaultCsvExportParams);
  $: updateProp('suppressCsvExport', suppressCsvExport);
  $: updateProp('defaultExcelExportParams', defaultExcelExportParams);
  $: updateProp('suppressExcelExport', suppressExcelExport);
  $: updateProp('excelStyles', excelStyles);
  // Filtering
  $: updateProp('quickFilterText', quickFilterText);
  $: updateProp('cacheQuickFilter', cacheQuickFilter);
  $: updateProp('includeHiddenColumnsInQuickFilter', includeHiddenColumnsInQuickFilter);
  $: updateProp('isExternalFilterPresent', isExternalFilterPresent);
  $: updateProp('doesExternalFilterPass', doesExternalFilterPass);
  $: updateProp('excludeChildrenWhenTreeDataFiltering', excludeChildrenWhenTreeDataFiltering);
  // Integrated Charts
  $: updateProp('enableCharts', enableCharts);
  $: updateProp('suppressChartToolPanelsButton', suppressChartToolPanelsButton);
  $: updateProp('getChartToolbarItems', getChartToolbarItems);
  $: updateProp('createChartContainer', createChartContainer);
  $: updateProp('chartThemes', chartThemes);
  $: updateProp('customChartThemes', customChartThemes);
  $: updateProp('chartThemeOverrides', chartThemeOverrides);
  $: updateProp('chartToolPanelsDef', chartToolPanelsDef);
  // Keyboard Navigation
  $: updateProp('navigateToNextHeader', navigateToNextHeader);
  $: updateProp('tabToNextHeader', tabToNextHeader);
  $: updateProp('navigateToNextCell', navigateToNextCell);
  $: updateProp('tabToNextCell', tabToNextCell);
  // Loading Cell Renderers
  $: updateProp('loadingCellRenderer', loadingCellRenderer);
  $: updateProp('loadingCellRendererParams', loadingCellRendererParams);
  $: updateProp('loadingCellRendererSelector', loadingCellRendererSelector);
  // Localisation
  $: updateProp('localeText', localeText);
  $: updateProp('getLocaleText', getLocaleText);
  // Master Detail
  $: updateProp('masterDetail', masterDetail);
  $: updateProp('isRowMaster', isRowMaster);
  $: updateProp('detailCellRenderer', detailCellRenderer);
  $: updateProp('detailCellRendererParams', detailCellRendererParams);
  $: updateProp('detailRowHeight', detailRowHeight);
  $: updateProp('detailRowAutoHeight', detailRowAutoHeight);
  $: updateProp('embedFullWidthRows', embedFullWidthRows);
  $: updateProp('keepDetailRows', keepDetailRows);
  $: updateProp('keepDetailRowsCount', keepDetailRowsCount);
  // Miscellaneous
  $: updateProp('api', api);
  $: updateProp('columnApi', columnApi);
  $: updateProp('alignedGrids', alignedGrids);
  $: updateProp('context', context);
  $: updateProp('tabIndex', tabIndex);
  $: updateProp('rowBuffer', rowBuffer);
  $: updateProp('valueCache', valueCache);
  $: updateProp('valueCacheNeverExpires', valueCacheNeverExpires);
  $: updateProp('enableCellExpressions', enableCellExpressions);
  $: updateProp('getDocument', getDocument);
  $: updateProp('suppressParentsInRowNodes', suppressParentsInRowNodes);
  $: updateProp('suppressTouch', suppressTouch);
  $: updateProp('suppressFocusAfterRefresh', suppressFocusAfterRefresh);
  $: updateProp('suppressAsyncEvents', suppressAsyncEvents);
  $: updateProp('suppressBrowserResizeObserver', suppressBrowserResizeObserver);
  $: updateProp('suppressPropertyNamesCheck', suppressPropertyNamesCheck);
  $: updateProp('suppressChangeDetection', suppressChangeDetection);
  $: updateProp('debug', debug);
  // Overlays
  $: updateProp('overlayLoadingTemplate', overlayLoadingTemplate);
  $: updateProp('loadingOverlayComponent', loadingOverlayComponent);
  $: updateProp('loadingOverlayComponentParams', loadingOverlayComponentParams);
  $: updateProp('suppressLoadingOverlay', suppressLoadingOverlay);
  $: updateProp('overlayNoRowsTemplate', overlayNoRowsTemplate);
  $: updateProp('noRowsOverlayComponent', noRowsOverlayComponent);
  $: updateProp('noRowsOverlayComponentParams', noRowsOverlayComponentParams);
  $: updateProp('suppressNoRowsOverlay', suppressNoRowsOverlay);
  // Pagination
  $: updateProp('pagination', pagination);
  $: updateProp('paginationPageSize', paginationPageSize);
  $: updateProp('paginationNumberFormatter', paginationNumberFormatter);
  $: updateProp('paginationAutoPageSize', paginationAutoPageSize);
  $: updateProp('paginateChildRows', paginateChildRows);
  $: updateProp('suppressPaginationPanel', suppressPaginationPanel);
  // Pivot and Aggregation
  $: updateProp('pivotMode', pivotMode);
  $: updateProp('pivotPanelShow', pivotPanelShow);
  $: updateProp('pivotColumnGroupTotals', pivotColumnGroupTotals);
  $: updateProp('pivotRowTotals', pivotRowTotals);
  $: updateProp('pivotSuppressAutoColumn', pivotSuppressAutoColumn);
  $: updateProp('processPivotResultColDef', processPivotResultColDef);
  $: updateProp('processPivotResultColGroupDef', processPivotResultColGroupDef);
  $: updateProp('suppressExpandablePivotGroups', suppressExpandablePivotGroups);
  $: updateProp('functionsReadOnly', functionsReadOnly);
  $: updateProp('aggFuncs', aggFuncs);
  $: updateProp('getGroupRowAgg', getGroupRowAgg);
  $: updateProp('suppressAggFuncInHeader', suppressAggFuncInHeader);
  $: updateProp('alwaysAggregateAtRootLevel', alwaysAggregateAtRootLevel);
  $: updateProp('suppressAggAtRootLevel', suppressAggAtRootLevel);
  $: updateProp('aggregateOnlyChangedColumns', aggregateOnlyChangedColumns);
  $: updateProp('suppressAggFilteredOnly', suppressAggFilteredOnly);
  $: updateProp('groupAggFiltering', groupAggFiltering);
  $: updateProp(
    'removePivotHeaderRowWhenSingleValueColumn',
    removePivotHeaderRowWhenSingleValueColumn
  );
  // Rendering
  $: updateProp('animateRows', animateRows);
  $: updateProp('enableCellChangeFlash', enableCellChangeFlash);
  $: updateProp('cellFlashDelay', cellFlashDelay);
  $: updateProp('cellFadeDelay', cellFadeDelay);
  $: updateProp('allowShowChangeAfterFilter', allowShowChangeAfterFilter);
  $: updateProp('domLayout', domLayout);
  $: updateProp('ensureDomOrder', ensureDomOrder);
  $: updateProp('getBusinessKeyForNode', getBusinessKeyForNode);
  $: updateProp('gridId', gridId);
  $: updateProp('processRowPostCreate', processRowPostCreate);
  $: updateProp('enableRtl', enableRtl);
  $: updateProp('suppressColumnVirtualisation', suppressColumnVirtualisation);
  $: updateProp('suppressRowVirtualisation', suppressRowVirtualisation);
  $: updateProp('suppressMaxRenderedRowRestriction', suppressMaxRenderedRowRestriction);
  // Row Drag and Drop
  $: updateProp('rowDragManaged', rowDragManaged);
  $: updateProp('rowDragEntireRow', rowDragEntireRow);
  $: updateProp('rowDragMultiRow', rowDragMultiRow);
  $: updateProp('suppressRowDrag', suppressRowDrag);
  $: updateProp('suppressMoveWhenRowDragging', suppressMoveWhenRowDragging);
  $: updateProp('rowDragText', rowDragText);
  // Row Full Width
  $: updateProp('fullWidthCellRenderer', fullWidthCellRenderer);
  $: updateProp('fullWidthCellRendererParams', fullWidthCellRendererParams);
  // Row Grouping
  $: updateProp('groupDisplayType', groupDisplayType);
  $: updateProp('groupDefaultExpanded', groupDefaultExpanded);
  $: updateProp('autoGroupColumnDef', autoGroupColumnDef);
  $: updateProp('groupMaintainOrder', groupMaintainOrder);
  $: updateProp('groupSelectsChildren', groupSelectsChildren);
  $: updateProp('groupIncludeFooter', groupIncludeFooter);
  $: updateProp('groupIncludeTotalFooter', groupIncludeTotalFooter);
  $: updateProp('groupSuppressBlankHeader', groupSuppressBlankHeader);
  $: updateProp('groupSelectsFiltered', groupSelectsFiltered);
  $: updateProp('showOpenedGroup', showOpenedGroup);
  $: updateProp('isGroupOpenByDefault', isGroupOpenByDefault);
  $: updateProp('initialGroupOrderComparator', initialGroupOrderComparator);
  $: updateProp('groupRemoveSingleChildren', groupRemoveSingleChildren);
  $: updateProp('groupRemoveLowestSingleChildren', groupRemoveLowestSingleChildren);
  $: updateProp('groupHideOpenParents', groupHideOpenParents);
  $: updateProp('groupAllowUnbalanced', groupAllowUnbalanced);
  $: updateProp('rowGroupPanelShow', rowGroupPanelShow);
  $: updateProp('rowGroupPanelSuppressSort', rowGroupPanelSuppressSort);
  $: updateProp('groupRowRenderer', groupRowRenderer);
  $: updateProp('groupRowRendererParams', groupRowRendererParams);
  // $: updateProp('suppressDragLeaveHidesColumns', suppressDragLeaveHidesColumns);
  $: updateProp('suppressGroupRowsSticky', suppressGroupRowsSticky);
  // $: updateProp('suppressRowGroupHidesColumns', suppressRowGroupHidesColumns);
  $: updateProp('suppressMakeColumnVisibleAfterUnGroup', suppressMakeColumnVisibleAfterUnGroup);
  $: updateProp('treeData', treeData);
  $: updateProp('treeDataDisplayType', treeDataDisplayType);
  $: updateProp('getDataPath', getDataPath);
  // Row Pinning
  $: updateProp('pinnedTopRowData', pinnedTopRowData);
  $: updateProp('pinnedBottomRowData', pinnedBottomRowData);
  // RowModel
  $: updateProp('rowModelType', rowModelType);
  $: updateProp('getRowId', getRowId);
  // RowModel: Client-Side
  $: isClientSide = rowModelType == null || rowModelType === 'clientSide';
  $: if (isClientSide) updateProp('rowData', rowData);
  $: if (isClientSide) updateProp('resetRowDataOnUpdate', resetRowDataOnUpdate);
  $: if (isClientSide) updateProp('asyncTransactionWaitMillis', asyncTransactionWaitMillis);
  $: if (isClientSide)
    updateProp(
      'suppressModelUpdateAfterUpdateTransaction',
      suppressModelUpdateAfterUpdateTransaction
    );
  // RowModel: Infinite
  $: if (rowModelType === 'infinite') updateProp('datasource', datasource);
  $: if (rowModelType === 'infinite') updateProp('cacheOverflowSize', cacheOverflowSize);
  $: if (rowModelType === 'infinite')
    updateProp('maxConcurrentDatasourceRequests', maxConcurrentDatasourceRequests);
  $: if (rowModelType === 'infinite' || rowModelType === 'serverSide')
    updateProp('cacheBlockSize', cacheBlockSize);
  $: if (rowModelType === 'infinite' || rowModelType === 'serverSide')
    updateProp('maxBlocksInCache', maxBlocksInCache);
  $: if (rowModelType === 'infinite' || rowModelType === 'serverSide')
    updateProp('infiniteInitialRowCount', infiniteInitialRowCount);
  // RowModel: Server-Side
  $: if (rowModelType === 'serverSide') updateProp('serverSideDatasource', serverSideDatasource);
  // $: if (rowModelType === 'serverSide') updateProp('cacheBlockSize', cacheBlockSize);
  // $: if (rowModelType === 'serverSide') updateProp('maxBlocksInCache', maxBlocksInCache);
  // $: if (rowModelType === 'serverSide')
  //   updateProp('maxConcurrentDatasourceRequests', maxConcurrentDatasourceRequests);
  $: if (rowModelType === 'serverSide')
    updateProp('blockLoadDebounceMillis', blockLoadDebounceMillis);
  $: if (rowModelType === 'serverSide') updateProp('purgeClosedRowNodes', purgeClosedRowNodes);
  $: if (rowModelType === 'serverSide')
    updateProp('serverSideSortAllLevels', serverSideSortAllLevels);
  $: if (rowModelType === 'serverSide')
    updateProp('serverSideOnlyRefreshFilteredGroups', serverSideOnlyRefreshFilteredGroups);
  $: if (rowModelType === 'serverSide')
    updateProp('serverSideFilterAllLevels', serverSideFilterAllLevels);
  $: if (rowModelType === 'serverSide')
    updateProp('serverSideSortOnServer', serverSideSortOnServer);
  $: if (rowModelType === 'serverSide')
    updateProp('serverSideFilterOnServer', serverSideFilterOnServer);
  $: if (rowModelType === 'serverSide')
    updateProp('serverSideInitialRowCount', serverSideInitialRowCount);
  $: if (rowModelType === 'serverSide')
    updateProp('suppressServerSideInfiniteScroll', suppressServerSideInfiniteScroll);
  $: if (rowModelType === 'serverSide') updateProp('getChildCount', getChildCount);
  $: if (rowModelType === 'serverSide')
    updateProp('getServerSideGroupLevelParams', getServerSideGroupLevelParams);
  $: if (rowModelType === 'serverSide')
    updateProp('isServerSideGroupOpenByDefault', isServerSideGroupOpenByDefault);
  $: if (rowModelType === 'serverSide')
    updateProp('isApplyServerSideTransaction', isApplyServerSideTransaction);
  $: if (rowModelType === 'serverSide') updateProp('isServerSideGroup', isServerSideGroup);
  $: if (rowModelType === 'serverSide') updateProp('getServerSideGroupKey', getServerSideGroupKey);
  // RowModel: Viewport
  $: if (rowModelType === 'viewport') updateProp('viewportDatasource', viewportDatasource);
  $: if (rowModelType === 'viewport')
    updateProp('viewportRowModelPageSize', viewportRowModelPageSize);
  $: if (rowModelType === 'viewport')
    updateProp('viewportRowModelBufferSize', viewportRowModelBufferSize);
  // Scrolling
  $: updateProp('alwaysShowHorizontalScroll', alwaysShowHorizontalScroll);
  $: updateProp('alwaysShowVerticalScroll', alwaysShowVerticalScroll);
  $: updateProp('debounceVerticalScrollbar', debounceVerticalScrollbar);
  $: updateProp('suppressHorizontalScroll', suppressHorizontalScroll);
  $: updateProp('suppressScrollOnNewData', suppressScrollOnNewData);
  $: updateProp('suppressScrollWhenPopupsAreOpen', suppressScrollWhenPopupsAreOpen);
  $: updateProp('suppressAnimationFrame', suppressAnimationFrame);
  $: updateProp('suppressMiddleClickScrolls', suppressMiddleClickScrolls);
  $: updateProp('suppressPreventDefaultOnMouseWheel', suppressPreventDefaultOnMouseWheel);
  $: updateProp('scrollbarWidth', scrollbarWidth);
  // Selection
  $: updateProp('rowSelection', rowSelection);
  $: updateProp('rowMultiSelectWithClick', rowMultiSelectWithClick);
  $: updateProp('isRowSelectable', isRowSelectable);
  $: updateProp('suppressRowDeselection', suppressRowDeselection);
  $: updateProp('suppressRowClickSelection', suppressRowClickSelection);
  $: updateProp('suppressCellFocus', suppressCellFocus);
  $: updateProp('suppressMultiRangeSelection', suppressMultiRangeSelection);
  $: updateProp('enableCellTextSelection', enableCellTextSelection);
  $: updateProp('enableRangeSelection', enableRangeSelection);
  $: updateProp('enableRangeHandle', enableRangeHandle);
  $: updateProp('enableFillHandle', enableFillHandle);
  $: updateProp('fillHandleDirection', fillHandleDirection);
  $: updateProp('fillOperation', fillOperation);
  $: updateProp('suppressClearOnFillReduction', suppressClearOnFillReduction);
  // Sorting
  $: updateProp('sortingOrder', sortingOrder);
  $: updateProp('accentedSort', accentedSort);
  $: updateProp('unSortIcon', unSortIcon);
  $: updateProp('suppressMultiSort', suppressMultiSort);
  $: updateProp('alwaysMultiSort', alwaysMultiSort);
  $: updateProp('multiSortKey', multiSortKey);
  $: updateProp('suppressMaintainUnsortedOrder', suppressMaintainUnsortedOrder);
  $: updateProp('postSortRows', postSortRows);
  $: updateProp('deltaSort', deltaSort);
  // Styling
  $: updateProp('icons', icons);
  $: updateProp('rowHeight', rowHeight);
  $: updateProp('getRowHeight', getRowHeight);
  $: updateProp('rowStyle', rowStyle);
  $: updateProp('getRowStyle', getRowStyle);
  $: updateProp('rowClass', rowClass);
  $: updateProp('getRowClass', getRowClass);
  $: updateProp('rowClassRules', rowClassRules);
  $: updateProp('isFullWidthRow', isFullWidthRow);
  $: updateProp('suppressRowHoverHighlight', suppressRowHoverHighlight);
  $: updateProp('suppressRowTransform', suppressRowTransform);
  $: updateProp('columnHoverHighlight', columnHoverHighlight);
  // TODO: events
  // TODO: custom row model
</script>

<div bind:this={eGui} style:height="100%" {style} class={className} />
