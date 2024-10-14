<?php
/**
 * Webkul Software
 *
 * @category Webkul
 * @package Webkul_Test
 * @author Webkul
 * @copyright Copyright (c) Webkul Software Private Limited (https://webkul.com)
 * @license https://store.webkul.com/license.html
 */
namespace Bss\DynamicRows\Block\Adminhtml\CustomButton\Edit\Form;

class ViewCustom extends \Magento\Backend\Block\Template
{
    protected $_template = 'test.phtml';

    private $assetRepository;
	
	
	
 
    public function __construct(
        \Magento\Backend\Block\Template\Context $context,
        \Magento\Framework\View\Model\PageLayout\Config\BuilderInterface $pageLayoutBuilder,
        \Magento\Framework\ObjectManagerInterface $objectManager,
        \Magento\Cms\Api\PageRepositoryInterface $pageRepositoryInterface,
        \Magento\Framework\Api\SearchCriteriaBuilder $searchCriteriaBuilder,
		\Magento\Framework\View\Asset\Repository $assetRepository,
        array $data = []
    ) {
        $this->_objectManager = $objectManager;
        $this->formKey = $context->getFormKey();
        $this->pageRepositoryInterface = $pageRepositoryInterface;
        $this->searchCriteriaBuilder = $searchCriteriaBuilder;
		$this->urlBuilder = $context->getUrlBuilder();
		$this->assetRepository = $assetRepository;
        parent::__construct($context, $data);
    }

    public function getAssertRepository(): \Magento\Framework\View\Asset\Repository
    {
        return $this->assetRepository;
    }


	
	
	public function getSaveUrl()
 {
     return $this->urlBuilder->getUrl('*/*/index/scope/stores');
 }
}